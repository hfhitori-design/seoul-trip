// 根据 SW 自身路径动态计算基础路径，兼容任意仓库名
const BASE = self.location.pathname.replace(/\/[^/]*$/, '');
const CACHE_NAME = 'seoul-trip-v3';
const FILES = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/style.css',
  BASE + '/script.js',
  BASE + '/location-pool.json',
  BASE + '/fonts/Caveat-Regular.ttf',
  BASE + '/fonts/ZCOOLKuaiLe-Regular.ttf'
];

// 安装：预缓存所有静态资源
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES).catch(function(err) {
        console.warn('SW 预缓存部分失败（可接受）:', err);
      });
    })
  );
});

// 激活：清理旧缓存
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
          .map(function(n) { return caches.delete(n); })
      );
    })
  );
});

// Stale-While-Revalidate：先返回缓存，后台更新
self.addEventListener('fetch', function(e) {
  // 只处理 GET 请求
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(e.request).then(function(cached) {
        const fetchPromise = fetch(e.request).then(function(networkResponse) {
          // 更新缓存
          if (networkResponse && networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(function() {
          // 网络失败，返回缓存（或无响应）
        });

        // 优先返回缓存，同时后台更新
        return cached || fetchPromise;
      });
    })
  );
});
