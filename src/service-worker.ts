/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  // ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png | .jpeg | .jpg | .gif  | .svg'),
    ({request}) => request.destination === 'image',
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({
          maxEntries: 50, // Max numbers of images
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Fetch from network and save response to cache
const RUNTIME_CACHE = 'api-cache';
self.addEventListener('fetch', async (event: any) => {

    // console.log('event.request ', event.request);
    if ( event.request.url.startsWith('https://srf-group-be.herokuapp.com/api/') &&
         event.request.method === "GET" ) {
        const networkResponse = await fetch(event.request);
        const runtimeCache = await caches.open(RUNTIME_CACHE);

        runtimeCache.put(event.request.url, networkResponse);
    }
});


// Respond from cache, otherwise fetch from network
// self.addEventListener('fetch', (event: any) => {
//     event.respondWith(
//         // look in the cache for the resource
//         caches.match(event.request).then(async response => {
//             if (response) {
//                 // is in cache, respond with the cached resource
//                 return response;
//             }
//             // if not found fetch it from the network
//             const networkResponse = await fetch(event.request);
//             // response needs to be cloned if going to be used more than once
//             const clonedResponse = networkResponse.clone();
//
//             // save response to runtime cache for later use
//             const runtimeCache = await caches.open('runtime-cache');
//             runtimeCache.put(event.request, networkResponse);
//
//             // respond with the cloned network response
//             return Promise.resolve(clonedResponse);
//         })
//     );
// });