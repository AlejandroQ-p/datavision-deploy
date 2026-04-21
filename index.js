const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DataVision Analytics | Core System</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Space+Mono&display=swap" rel="stylesheet">
        <style>
            body { 
                background-color: #020617; 
                color: #e2e8f0; 
                font-family: 'Rajdhani', sans-serif;
                background-image: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #020617 100%);
                min-height: 100vh;
            }
            .glass {
                background: rgba(30, 41, 59, 0.5);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
            }
            .status-glow {
                box-shadow: 0 0 15px #22c55e;
            }
            .mono { font-family: 'Space Mono', monospace; }
            .accent-text { color: #38bdf8; text-shadow: 0 0 8px rgba(56, 189, 248, 0.4); }
        </style>
    </head>
    <body class="p-4 md:p-8">
        <header class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
                <h1 class="text-4xl font-bold tracking-wider accent-text">DATAVISION <span class="text-white">ANALYTICS v2.0</span></h1>
                <p class="text-slate-400 mono text-sm uppercase tracking-widest">Enterprise Infrastructure Monitor</p>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                    <div class="w-3 h-3 bg-green-500 rounded-full status-glow animate-pulse"></div>
                    <span class="text-sm font-semibold uppercase tracking-tighter">System Online</span>
                </div>
                <div class="glass px-4 py-2 rounded-lg hidden md:block">
                    <span class="text-xs text-slate-400 block">LOCAL TIME</span>
                    <span id="clock" class="mono text-blue-400">00:00:00</span>
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                
                <div class="glass p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-all">
                    <div class="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <p class="text-slate-400 text-xs uppercase tracking-widest mb-1">CPU Load</p>
                    <h2 class="text-4xl font-bold mono">24.<span class="text-blue-500">8</span>%</h2>
                    <div class="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                        <div class="bg-blue-500 h-full w-[24%]"></div>
                    </div>
                </div>

                <div class="glass p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-all">
                    <p class="text-slate-400 text-xs uppercase tracking-widest mb-1">Memory Usage</p>
                    <h2 class="text-4xl font-bold mono">1.4<span class="text-purple-500">GB</span></h2>
                    <div class="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                        <div class="bg-purple-500 h-full w-[45%]"></div>
                    </div>
                </div>

                <div class="glass p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
                    <p class="text-slate-400 text-xs uppercase tracking-widest mb-1">Server Latency</p>
                    <h2 class="text-4xl font-bold mono">12<span class="text-emerald-500">ms</span></h2>
                    <div class="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                        <div class="bg-emerald-500 h-full w-[10%]"></div>
                    </div>
                </div>

                <div class="glass p-6 rounded-2xl relative overflow-hidden group hover:border-orange-500/50 transition-all">
                    <p class="text-slate-400 text-xs uppercase tracking-widest mb-1">Uptime</p>
                    <h2 class="text-4xl font-bold mono">99.<span class="text-orange-500">9</span>%</h2>
                    <div class="w-full bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                        <div class="bg-orange-500 h-full w-[99%]"></div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                        <svg class="text-blue-400" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"/></svg>
                        OPERATIONAL LOG: DEPLOYMENT_04
                    </h3>
                    <div class="space-y-4 mono text-sm overflow-x-auto">
                        <div class="flex gap-4 border-l-2 border-green-500 pl-4 py-1 bg-green-500/5">
                            <span class="text-green-500">[SUCCESS]</span>
                            <span class="text-slate-300 italic">Code pushed to main branch.</span>
                            <span class="ml-auto text-slate-500">ALEJANDRO-Q</span>
                        </div>
                        <div class="flex gap-4 border-l-2 border-blue-500 pl-4 py-1 bg-blue-500/5">
                            <span class="text-blue-500">[INFO]</span>
                            <span class="text-slate-300">Continuous Integration triggered via Render Cloud.</span>
                            <span class="ml-auto text-slate-500">RENDER-AUTO</span>
                        </div>
                        <div class="flex gap-4 border-l-2 border-blue-500 pl-4 py-1 bg-blue-500/5">
                            <span class="text-blue-500">[INFO]</span>
                            <span class="text-slate-300">Static assets optimization complete.</span>
                            <span class="ml-auto text-slate-500">BUILD-TOOL</span>
                        </div>
                        <div class="flex gap-4 border-l-2 border-yellow-500 pl-4 py-1 bg-yellow-500/5">
                            <span class="text-yellow-500">[RUNNING]</span>
                            <span class="text-slate-300 animate-pulse font-bold">Verifying global CDN propagation...</span>
                        </div>
                    </div>
                </div>

                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-6">ENVIRONMENT</h3>
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">AQ</div>
                            <div>
                                <p class="text-sm font-bold">Ítalo Alejandro Quispe</p>
                                <p class="text-xs text-slate-400 uppercase">Lead Engineer</p>
                            </div>
                        </div>
                        <hr class="border-slate-700">
                        <ul class="text-sm space-y-3">
                            <li class="flex justify-between">
                                <span class="text-slate-400">Node.js Version</span>
                                <span class="mono">v20.x</span>
                            </li>
                            <li class="flex justify-between">
                                <span class="text-slate-400">Platform</span>
                                <span class="mono">Render / Cloud</span>
                            </li>
                            <li class="flex justify-between">
                                <span class="text-slate-400">Region</span>
                                <span class="mono text-blue-400">US-EAST (Oregon)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

        <footer class="mt-12 text-center">
            <div class="inline-block glass px-6 py-2 rounded-full text-xs mono text-slate-500 uppercase tracking-[0.2em]">
                DataVision Core &bull; Secure Environment &bull; 2026
            </div>
        </footer>

        <script>
            function updateClock() {
                const now = new Date();
                document.getElementById('clock').innerText = now.toLocaleTimeString('es-PE');
            }
            setInterval(updateClock, 1000);
            updateClock();
        </script>
    </body>
    </html>
  \`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
