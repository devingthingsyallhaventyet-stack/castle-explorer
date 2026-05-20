--5d518b80d3026f8564a50b2c140bc2819e97c12685c51812d693fb4cde76
Content-Disposition: form-data; name="worker.js"

export default {
  async fetch(request, env) {
    const allowedOrigins = ["https://castlecore.uk", "https://www.castlecore.uk"];
    const origin = request.headers.get("Origin") || "";
    const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
    
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": corsOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400"
        }
      });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }
    try {
      const body = await request.json();
      const text = body.text || "No data";
      const chatId = env.TELEGRAM_CHAT_ID;
      const botToken = env.TELEGRAM_BOT_TOKEN;
      const resp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: "Markdown" })
      });
      const result = await resp.json();
      return new Response(JSON.stringify({ ok: result.ok }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": corsOrigin
        }
      });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: e.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": corsOrigin
        }
      });
    }
  }
};
--5d518b80d3026f8564a50b2c140bc2819e97c12685c51812d693fb4cde76--
