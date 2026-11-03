// Service worker: guarda a "casca" do app para abrir rápido. Os dados sempre vêm da internet.
const VERSAO = 'pss-v3';
const CASCA = ['./', './index.html', './config.js', './manifest.json', './logo.png', './icon-192.png', './icon-512.png', './palamoni.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSAO).then(c => c.addAll(CASCA)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;   // só os arquivos do próprio app; dados e bibliotecas vêm direto da internet
  // rede primeiro (pega versões novas do app); se estiver sem internet, usa o que está guardado
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSAO).then(ca => ca.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request)));
});
