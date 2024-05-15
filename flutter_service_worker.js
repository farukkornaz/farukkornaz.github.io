'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e59cfcfde18c9b967e94fdc78f184cf9",
".git/config": "9737b094cbfc31691265c7fd300428f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2b2a9e611a8380363521cc942b88fa3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "be0b3c415f33f5a937262497c9fc2489",
".git/logs/refs/heads/main": "b7c69e7e59e0cee83b360d0d9171cc79",
".git/logs/refs/remotes/origin/main": "509ed99cb2db25ea828196fbdf0c0ec3",
".git/objects/0f/c50a9bcb143a78e1cbc40cd1bc9e369a9682b7": "787cd9643659a4b36c92171021e11c32",
".git/objects/10/1776ddc5fed0fc6c10c4b6a085913c94ff06ae": "bf1ce538bd5f80657ff3807978a5438a",
".git/objects/26/0b3961edc4845a92e7c7c4096f0c8126c0062c": "8b1a3b378ddbc77bdfe1c76373433749",
".git/objects/31/661535a5484a5624275c8556d1c58690763a5e": "f221701276b5a68958493d6d0fd295e7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/ef9887ff07d4fc70c078ed6c7a01e9b154b403": "e02c39b63560ad99611c66cb06e1356f",
".git/objects/6d/39acb3317f6ac710ec91aafe97f9b7cbcf2e23": "7a7a1bc41904d11dbe01122d8107fa4e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/c3330a2cedf459a2aa8ef1c5cbd66de1b0f9ab": "6ac7d8c21cd203806d85d7b85d370367",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/280dc52f032779eb6bbf10633156aff262ec3e": "6dea35841ececc69143b3b1bfa81a024",
".git/objects/c9/08fb21a009580bf442686ebb0ec3ef07e30882": "e096adde02a72150efca4f1fa154ffb0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/4fc9ccd2dc6252e17e409b84d8a739f023f100": "84635103500af6a937180e3ee48cc613",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "dfc938e9d5c87c54e2b74acf103574d0",
".git/refs/remotes/origin/main": "dfc938e9d5c87c54e2b74acf103574d0",
"assets/AssetManifest.bin": "ef2e7298484b5ece97a8ff55fc135cab",
"assets/AssetManifest.bin.json": "966c89cf330c6b85bb55dbdb2d462404",
"assets/AssetManifest.json": "abf6bd1d11834fe1f078bd570dd66592",
"assets/assets/fonts/quicksandregular.ttf": "9e7757030c60a7a6973c9a95d9cea1c0",
"assets/assets/fonts/swissblack.ttf": "75c766401b6dc0dd531172f8cf00cf81",
"assets/assets/images/app_logo.png": "7c2adac1583aa8a3693170efe08f5b7c",
"assets/assets/images/baloons.jpeg": "16dd945088dc57252e97e0b12356a159",
"assets/assets/images/diamondIcon.png": "2cd34797c149f958d0c8bd7ca7dc4006",
"assets/assets/images/duyuru.jpg": "7a92f639ad8489d8910c7ce30dda247e",
"assets/assets/images/madalyalar/bronze_medal.png": "986cde17454cb66154a987e7d3095c0f",
"assets/assets/images/madalyalar/gold_medal.png": "f276657874cf1c8d594029eb2785726c",
"assets/assets/images/madalyalar/silver_medal.png": "bf5df37e927260af789dda453206cc90",
"assets/assets/images/q1.jpeg": "7854b1788f6610325906b6684a1d639e",
"assets/assets/images/q2.jpeg": "cceada6896f8174c08435213e8f2bc9a",
"assets/assets/images/q3.jpeg": "184af90249ab9f4c56cba7e5c3ae01e6",
"assets/assets/images/q4.jpeg": "cceada6896f8174c08435213e8f2bc9a",
"assets/assets/images/q5.jpeg": "7854b1788f6610325906b6684a1d639e",
"assets/assets/images/student.jpg": "423f918ad51c9f2660e64b572cee7768",
"assets/assets/sounds/true.mp3": "8b59caef6aa7536bae23bdb892c341d1",
"assets/assets/sounds/wrong.mp3": "38245c337ba2d0ead309ceb416b750e7",
"assets/FontManifest.json": "33d07bef3d3aed96dba8dcc4f996f0da",
"assets/fonts/MaterialIcons-Regular.otf": "600c5a652b711611f1b50364efad52cf",
"assets/NOTICES": "d0b18a407c49ff7491dfe918955a71b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "053c5e691bf237208a85bdcdd5ce6894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a206ff8facdc3cabf685ad96af7ee798",
"/": "a206ff8facdc3cabf685ad96af7ee798",
"main.dart.js": "952f0f46d5537c6a05e154afb71f51e9",
"manifest.json": "7c2d0b4abc18a72a0fd3f57f4b515198",
"version.json": "2c566bcede739dfa0e018919fb1a3da0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
