const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>🚀 DataVision Analytics: Despliegue Exitoso</h1><p>Estado: Escalamiento e Infraestructura configurada correctamente.</p>');
});
const PORT = 3000;
server.listen(PORT, () => console.log('Servidor DataVision en puerto ' + PORT));
