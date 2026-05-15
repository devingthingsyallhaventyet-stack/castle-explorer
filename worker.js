export default {
  async fetch(request, env) {
    const allowedOrigins = ["https://castlecore.uk", "https://www.castlecore.uk"];
    const origin = request.headers.get("Origin") || "";
    const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
    const corsHeaders = {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Queue-Secret",
      "Access-Control-Max-Age": "86400"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // GET /queue?secret=... — return and clear pending items
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/queue") {
      const secret = url.searchParams.get("secret");
      if (secret !== env.QUEUE_SECRET) {
        return new Response("Unauthorized", { status: 401 });
      }
      // Read queue from GitHub repo file
      try {
        const queueData = await readGitHubFile(env, "enrich-queue.json");
        if (queueData && queueData.items && queueData.items.length > 0) {
          // Clear the queue by writing empty array
          await writeGitHubFile(env, "enrich-queue.json", JSON.stringify({ items: [] }, null, 2), queueData.sha, "Clear enrich queue after processing");
          return new Response(JSON.stringify({ ok: true, items: queueData.items }), {
            headers: { "Content-Type": "application/json", ...corsHeaders }
          });
        }
        return new Response(JSON.stringify({ ok: true, items: [] }), {
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: e.message }), {
          status: 500, headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const body = await request.json();
      const text = body.text || "No data";
      const listingData = body.listing || null;

      // 1. Append to GitHub queue file
      let queueOk = false;
      try {
        const existing = await readGitHubFile(env, "enrich-queue.json");
        const items = (existing && existing.items) ? existing.items : [];
        items.push({ text, listing: listingData, ts: Date.now() });
        const sha = existing ? existing.sha : null;
        await writeGitHubFile(env, "enrich-queue.json", JSON.stringify({ items }, null, 2), sha, "Queue enrich item: " + (listingData?.name || "unknown"));
        queueOk = true;
      } catch (e) {
        console.error("GitHub queue error:", e.message);
      }

      // 2. Send Telegram notification (brief, not the full data)
      let telegramOk = false;
      try {
        const chatId = env.TELEGRAM_CHAT_ID;
        const botToken = env.TELEGRAM_BOT_TOKEN;
        const briefText = `🦞 Enrich item queued: *${listingData?.name || 'Unknown'}*\nProcessing automatically...`;
        const resp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: briefText, parse_mode: "Markdown" })
        });
        const result = await resp.json();
        telegramOk = result.ok;
      } catch (e) {
        console.error("Telegram error:", e.message);
      }

      return new Response(JSON.stringify({ ok: queueOk, telegram: telegramOk }), {
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: e.message }), {
        status: 500, headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
  }
};

async function readGitHubFile(env, path) {
  const resp = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/contents/${path}`, {
    headers: {
      "Authorization": `token ${env.GITHUB_TOKEN}`,
      "User-Agent": "castlecore-worker",
      "Accept": "application/vnd.github.v3+json"
    }
  });
  if (resp.status === 404) return null;
  if (!resp.ok) throw new Error(`GitHub read failed: ${resp.status}`);
  const data = await resp.json();
  const content = JSON.parse(atob(data.content));
  return { ...content, sha: data.sha };
}

async function writeGitHubFile(env, path, content, sha, message) {
  const body = {
    message,
    content: btoa(content),
    branch: "main"
  };
  if (sha) body.sha = sha;
  const resp = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${env.GITHUB_TOKEN}`,
      "User-Agent": "castlecore-worker",
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`GitHub write failed: ${resp.status} ${err}`);
  }
  return await resp.json();
}
