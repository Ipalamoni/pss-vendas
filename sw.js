// Service worker: guarda a "casca" do app para abrir rápido.
// v19: também guarda as bibliotecas (login e gráficos, com versão fixa) e a fonte, para não baixar de novo a cada abertura.
// Os dados de vendas ficam num cache próprio ('pss-dados', controlado pelo app: só baixa de novo quando o arquivo muda).
const VERSAO = 'pss-v22';
const LIBS = 'pss-libs-1';
const CASCA = ['./', './index.html', './config.js', './grupos.js', './manifest.json', './logo.png', './icon-192.png', './icon-512.png', './palamoni.png', './logo-escuro.png', './palamoni-escuro.png'];
const MANTER = [VERSAO, LIBS, 'pss-dados'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSAO).then(c => c.addAll(CASCA)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => !MANTER.includes(k)).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// bibliotecas com versão no endereço nunca mudam: usa a cópia guardada (cache primeiro)
const ehLib = u => (u.hostname === 'cdnjs.cloudflare.com' || u.hostname === 'cdn.jsdelivr.net' || u.hostname === 'unpkg.com') && /@?\d+\.\d+\.\d+/.test(u.pathname);
const ehFonte = u => u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com';
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (ehLib(u) || ehFonte(u)) {
    e.respondWith(caches.open(LIBS).then(async c => {
      const m = await c.match(e.request);
      const buscar = () => fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; });
      if (m) { if (u.hostname === 'fonts.googleapis.com') buscar().catch(() => {}); return m; }   // CSS da fonte: usa a guardada e renova por trás
      return buscar();
    }));
    return;
  }
  if (u.origin !== self.location.origin) return;   // dados e login vêm direto da internet
  // arquivos do app: rede primeiro (pega versões novas); sem internet, usa o que está guardado
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const c = r.clone(); caches.open(VERSAO).then(ca => ca.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request)));
});
