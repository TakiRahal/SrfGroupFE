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
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

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

// This allows the web app to trigger skipWaiting via
registerRoute(
    ({url}) => url.pathname.startsWith('https://srf-group-be.herokuapp.com/api/'),
    new StaleWhileRevalidate({
        cacheName: 'api-cache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200, 404],
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        ]
    })
);

// self.addEventListener('fetch', function (event: any) {
//     console.log('event ', event);
//     event.respondWith(
//         fetch(event.request).catch(function () {
//             return caches.match(event.request);
//         }),
//     );
// });

// self.addEventListener('fetch', (event) => {
//     console.log('event.request.url ', event.request.url);
//     if (event.request.url.endsWith('/offer/public')) {
//         event.respondWith((async () => {
//             // Configure the strategy in advance.
//             const strategy = new StaleWhileRevalidate({cacheName: 'api-cache'});
//
//             // Make two requests using the strategy.
//             // Because we're passing in event, event.waitUntil() will be called automatically.
//             const firstPromise: any = strategy.handle({event, request: 'https://srf-group-be.herokuapp.com/api'});
//             // const secondPromise = strategy.handle({event, request: 'https://example.com/api2'});
//
//             const [firstResponse, secondResponse] = await Promise.all(firstPromise);
//             const [firstBody, secondBody] = await Promise.all(firstResponse.text());
//
//             // Assume that we just want to concatenate the first API response with the second to create the
//             // final response HTML.
//             const compositeResponse = new Response(firstBody + secondBody, {
//                 headers: {'content-type': 'text/html'},
//             });
//
//             return compositeResponse;
//         })());
//     }
// });