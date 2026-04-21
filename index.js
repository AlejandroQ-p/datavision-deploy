const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DataVision Analytics | Cloud Infrastructure</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code&display=swap" rel="stylesheet">
        <style>
            :root { --aws-orange: #ff9900; --aws-blue: #232f3e; }
            body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #1e293b; }
            .mono { font-family: 'Fira Code', monospace; }
            .aws-card { border-top: 4px solid var(--aws-orange); }
            .drop-zone { border: 2px dashed #cbd5e1; transition: all 0.3s; }
            .drop-zone:hover { border-color: var(--aws-orange); background: #fff7ed; }
        </style>
    </head>
    <body class="bg-slate-50 min-h-screen">
        <nav class="bg-[#232f3e] text-white p-4 shadow-lg">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="bg-[#ff9900] p-1 rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    </div>
                    <span class="text-xl font-bold tracking-tight">DataVision <span class="text-[#ff9900]">Analytics</span></span>
                </div>
                <div class="flex gap-6 text-sm font-medium">
                    <span class="text-slate-400">Región: <span class="text-white">us-east-1</span></span>
                    <span class="text-slate-400">IAM: <span class="text-white text-xs uppercase">Ítalo_Alejandro_Admin</span></span>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto p-6 md:p-8">
            <div class="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r shadow-sm flex justify-between items-center">
                <div class="flex items-center">
                    <svg class="text-blue-500 mr-3" width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <p class="text-blue-700 text-sm font-medium">Auto-Scaling configurado: El sistema escalará automáticamente al superar el 70% de CPU.</p>
                </div>
                <span class="text-xs font-bold text-blue-500 mono">v1.0.4-STABLE</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 space-y-8">
                    <section class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 aws-card">
                        <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m-4-4 4 4 4-4"></path></svg>
                            Ingesta de Datos (S3 Optimized)
                        </h2>
                        <div class="drop-zone rounded-xl p-10 text-center cursor-pointer" onclick="simulateUpload()">
                            <input type="file" id="csvFile" class="hidden" accept=".csv">
                            <div id="uploadContent">
                                <svg class="mx-auto text-slate-400 mb-4" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"></path></svg>
                                <p class="text-slate-600 font-medium">Arrastra tu archivo .CSV aquí</p>
                                <p class="text-slate-400 text-sm mt-1">Límite por archivo: 500MB para procesamiento en tiempo real</p>
                            </div>
                            <div id="progressBox" class="hidden">
                                <p class="text-blue-600 font-bold mb-2 mono">Subiendo a AWS S3...</p>
                                <div class="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                                    <div id="progressBar" class="bg-blue-500 h-full w-0 transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h2 class="text-lg font-bold mb-6">Visualización de Reportes Dynamicos</h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="h-32 bg-slate-100 rounded flex items-end p-2 gap-1">
                                <div class="bg-blue-400 w-full h-1/2 rounded-t"></div>
                                <div class="bg-blue-500 w-full h-3/4 rounded-t"></div>
                                <div class="bg-blue-600 w-full h-full rounded-t"></div>
                                <div class="bg-blue-400 w-full h-2/3 rounded-t"></div>
                            </div>
                            <div class="h-32 bg-slate-100 rounded p-4 flex flex-col justify-center text-center">
                                <span class="text-xs text-slate-400 uppercase">Filas Procesadas</span>
                                <span class="text-2xl font-bold text-slate-700">1.2M</span>
                            </div>
                            <div class="h-32 bg-slate-100 rounded p-4 flex flex-col justify-center text-center">
                                <span class="text-xs text-slate-400 uppercase">Tiempo/Cómputo</span>
                                <span class="text-2xl font-bold text-slate-700 font-mono">0.4s</span>
                            </div>
                            <div class="h-32 bg-slate-100 rounded p-4 flex flex-col justify-center text-center border-2 border-orange-100 bg-orange-50">
                                <span class="text-xs text-orange-400 uppercase font-bold">Estado</span>
                                <span class="text-sm font-bold text-orange-600 italic">Esperando CSV</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="space-y-6">
                    <section class="bg-[#232f3e] text-white p-6 rounded-xl shadow-xl">
                        <h3 class="text-sm font-bold text-[#ff9900] uppercase tracking-widest mb-4">CloudWatch Metrics</h3>
                        <div class="space-y-6">
                            <div>
                                <div class="flex justify-between text-xs mb-2">
                                    <span>CPU Utilization (ASG)</span>
                                    <span class="mono">14%</span>
                                </div>
                                <div class="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                    <div class="bg-green-500 h-full w-[14%]"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-2">
                                    <span>S3 Storage (Used)</span>
                                    <span class="mono">84.2 GB</span>
                                </div>
                                <div class="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                    <div class="bg-blue-400 h-full w-[60%]"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs mb-2">
                                    <span>Network In (Last 5m)</span>
                                    <span class="mono text-orange-400">Active</span>
                                </div>
                                <div class="flex gap-1 h-8 items-end">
                                    <div class="w-1 bg-orange-500 h-2"></div>
                                    <div class="w-1 bg-orange-500 h-4"></div>
                                    <div class="w-1 bg-orange-500 h-3"></div>
                                    <div class="w-1 bg-orange-500 h-6 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 class="font-bold text-slate-800 mb-4 text-sm uppercase">Automatización (CI/CD)</h3>
                        <div class="space-y-3 text-xs mono">
                            <div class="flex items-center justify-between p-2 bg-slate-50 rounded">
                                <span class="text-slate-500">Source:</span>
                                <span class="text-blue-600 font-bold">GitHub (Main)</span>
                            </div>
                            <div class="flex items-center justify-between p-2 bg-slate-50 rounded">
                                <span class="text-slate-500">Deploy:</span>
                                <span class="text-green-600 font-bold">CodeDeploy</span>
                            </div>
                            <div class="flex items-center justify-between p-2 bg-slate-50 rounded">
                                <span class="text-slate-500">Last Build:</span>
                                <span class="text-slate-700">2026-04-21 20:00</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>

        <footer class="max-w-7xl mx-auto p-8 text-center text-slate-400 text-xs border-t border-slate-200 mt-10">
            <p>Infraestructura escalable de DataVision Analytics para la gestión masiva de datos CSV.</p>
            <p class="mt-2 font-bold text-slate-500 uppercase">Arquitectura AWS: EC2 + ASG + S3 + CloudWatch + CodeDeploy</p>
        </footer>

        <script>
            function simulateUpload() {
                const content = document.getElementById('uploadContent');
                const progressBox = document.getElementById('progressBox');
                const progressBar = document.getElementById('progressBar');
                
                content.classList.add('hidden');
                progressBox.classList.remove('hidden');
                
                let width = 0;
                const interval = setInterval(() => {
                    if (width >= 100) {
                        clearInterval(interval);
                        alert('¡Archivo subido y procesado en AWS S3 con éxito!');
                        location.reload();
                    } else {
                        width += 5;
                        progressBar.style.width = width + '%';
                    }
                }, 100);
            }
        </script>
    </body>
    </html>
  \`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('DataVision Core active on port ' + PORT);
});
