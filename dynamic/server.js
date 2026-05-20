const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const publicDir = path.resolve(__dirname);
const sectionDir = path.join(publicDir, 'sections');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function sendResponse(res, status, data, contentType) {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(data);
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      sendResponse(res, 404, 'No encontrado', 'text/plain');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    sendResponse(res, 200, data, contentType);
  });
}

const server = http.createServer((req, res) => {
  const normalizedUrl = req.url.split('?')[0];

  if (normalizedUrl === '/' || normalizedUrl === '/index.html') {
    serveFile(res, path.join(publicDir, 'index.html'));
    return;
  }

  if (normalizedUrl.startsWith('/api/sections/')) {
    const slug = normalizedUrl.replace('/api/sections/', '').replace(/\.[^/.]+$/, '');
    const sectionPath = path.join(sectionDir, `${slug}.html`);
    fs.readFile(sectionPath, 'utf8', (err, data) => {
      if (err) {
        sendResponse(res, 404, JSON.stringify({ error: 'Sección no encontrada' }), 'application/json');
        return;
      }
      sendResponse(res, 200, data, 'text/html; charset=utf-8');
    });
    return;
  }

  const localPath = path.join(publicDir, normalizedUrl);
  serveFile(res, localPath);
});

server.listen(port, () => {
  console.log(`Servidor dinámico iniciado en http://localhost:${port}`);
});
