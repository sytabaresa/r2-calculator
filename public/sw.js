const CACHE_NAME = 'r2-calculator-v1';

self.addEventListener('install', (event) => {
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil((async () => {
		const keys = await caches.keys();
		await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
		await self.clients.claim();
	})());
});

self.addEventListener('fetch', (event) => {
	const request = event.request;
	if (request.method !== 'GET') return;

	const url = new URL(request.url);
	const scope = self.registration.scope; // e.g. https://host/ or https://host/r2-calculator/
	const isSameOrigin = url.origin === self.location.origin;

	// Navigation requests: network-first, fallback to cache
	if (request.mode === 'navigate') {
		event.respondWith((async () => {
			try {
				const fresh = await fetch(request);
				const cache = await caches.open(CACHE_NAME);
				cache.put(new Request(scope), fresh.clone()).catch(() => {});
				return fresh;
			} catch (_) {
				const cache = await caches.open(CACHE_NAME);
				const cached = await cache.match(new Request(scope));
				return cached || caches.match(scope + 'index.html') || Response.error();
			}
		})());
		return;
	}

	// Cache-first for built assets and static files under scope
	if (isSameOrigin) {
		const pathname = url.pathname;
		const isAsset = pathname.startsWith(new URL('assets/', scope).pathname);
		const isStatic = pathname.startsWith(new URL('assets/icons/', scope).pathname)
			|| pathname.endsWith('/manifest.json')
			|| pathname.endsWith('/favicon.ico');

		if (isAsset || isStatic) {
			event.respondWith((async () => {
				const cache = await caches.open(CACHE_NAME);
				const cached = await cache.match(request);
				if (cached) return cached;
				const response = await fetch(request);
				if (response.ok) cache.put(request, response.clone()).catch(() => {});
				return response;
			})());
		}
	}
}); 