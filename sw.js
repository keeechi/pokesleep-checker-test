// sw.js - 必要最低限
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
// 必要に応じて fetch のキャッシュ戦略は後で追加
