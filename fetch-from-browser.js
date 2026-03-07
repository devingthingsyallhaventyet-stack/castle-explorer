const http = require('http');
const fs = require('fs');

// Simple HTTP server that the browser can POST to
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const {filename, data} = JSON.parse(body);
      fs.writeFileSync('img/' + filename, Buffer.from(data, 'base64'));
      console.log('Saved', filename, Buffer.from(data, 'base64').length, 'bytes');
      res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
      res.end('OK');
      server.close();
    });
  } else {
    res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type'});
    res.end('OK');
  }
});
server.listen(18923, () => console.log('Listening on 18923'));
setTimeout(() => { server.close(); process.exit(1); }, 30000);
