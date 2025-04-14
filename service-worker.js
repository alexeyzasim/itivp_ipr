const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.js',
  '/static/css/main.css',
  // Добавь здесь все остальные ресурсы, которые нужно кэшировать
];

// Событие установки SW
self.addEventListener('install', (event) => {
  console.log('Service Worker installed!');
  // Ожидаем кэширование ресурсов
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching resources...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Событие активации SW
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated!');
  // Удаляем старые кеши
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Перехват запросов (fetch) и предоставление кэшированных ресурсов в оффлайн-режиме
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Возвращаем кэшированный ответ, если он есть
        return cachedResponse;
      }
      // Если ресурса нет в кеше, выполняем обычный запрос
      return fetch(event.request);
    })
  );
});
