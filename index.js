const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DataVision Analytics | Dashboard</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            body { background-color: #0f172a; color: white; }
            .card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; }
        </style>
    </head>
    <body class="p-8">
        <nav class="flex justify-between items-center mb-12">
            <h1 class="text-3xl font-bold text-blue-400">🚀 DataVision <span class="text-white">Analytics</span></h1>
            <div class="bg-green-500 px-4 py-1 rounded-full text-sm font-bold animate-pulse text-black">SISTEMA ACTIVO</div>
        </nav>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="card">
                <p class="text-gray-400 text-sm">Tráfico de Red</p>
                <h2 class="text-4xl font-mono mt-2 text-blue-500">1.2 TB/s</h2>
            </div>
            <div class="card">
                <p class="text-gray-400 text-sm">Instancias EC2 Activas</p>
                <h2 class="text-4xl font-mono mt-2 text-purple-500">Auto-Scaling</h2>
            </div>
            <div class="card">
                <p class="text-gray-400 text-sm">Estado de Salud</p>
                <h2 class="text-4xl font-mono mt-2 text-green-500">99.9%</h2>
            </div>
        </div>

        <div class="card">
            <h3 class="text-xl mb-4 font-semibold border-b border-gray-700 pb-2">Log de Infraestructura - Operación 04</h3>
            <ul class="space-y-3 font-mono text-sm text-gray-300">
                <li class="flex items-center"><span class="text-green-400 mr-2">✔</span> [COMPLETADO] Configuración de Repositorio GitHub</li>
                <li class="flex items-center"><span class="text-green-400 mr-2">✔</span> [COMPLETADO] Integración Continua con Render Cloud</li>
                <li class="flex items-center"><span class="text-blue-400 mr-2">➤</span> [EN CURSO] Optimización de Interfaz de Usuario</li>
            </ul>
        </div>
        
        <footer class="mt-12 text-center text-gray-500 text-sm">
            © 2026 DataVision - Desarrollado por Ítalo Alejandro Quispe Pizarro
        </footer>
    </body>
    </html>
  `);
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Servidor corriendo...'));
