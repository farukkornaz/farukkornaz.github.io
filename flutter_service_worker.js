'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8f16369d168b46958611323e4d196941",
".git/config": "57dc83a2c3d4cff74db4de70dd6c175f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8bcb47b20d9e9c634ed90d64c7dfb22f",
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
".git/index": "9d47ce36e2e53ba43cafb5f99753baa2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77e2f41917b78a93258b3fc31163f7e9",
".git/logs/refs/heads/main": "f5ad2baef835e7138b2430401525b5bf",
".git/logs/refs/remotes/origin/main": "4ad86e94b1a35a7ef162b85e4cdf9b0c",
".git/objects/03/4b06edf3d0982fda6ada88d2557586b9dfdd9e": "95ef407f7b26e235f2430d6e5a2d3abf",
".git/objects/09/2a43720200d34f2e30e6c7da38fd744b753e84": "2f0f9c4baae04efa357e9a67376df97e",
".git/objects/0a/991e1f7e28f384ec70741cff8756e72bc075f5": "f3f118765fe1ba0bc39ab97090e4ae99",
".git/objects/0f/6bdd947c21b573f701600c2e53d61543b4dc72": "9c31c3d4ab549cd87a50259c5c9b3f69",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/c50a9bcb143a78e1cbc40cd1bc9e369a9682b7": "787cd9643659a4b36c92171021e11c32",
".git/objects/10/1776ddc5fed0fc6c10c4b6a085913c94ff06ae": "bf1ce538bd5f80657ff3807978a5438a",
".git/objects/12/1ddcf30c8484b379f1e84221a582dab3f075d4": "90852437c849a74c2ad53737dc938b3d",
".git/objects/12/cc43b93950c1a215638364095084791f9290e4": "49341db260ad5a7a601495893e5aa7d0",
".git/objects/14/5ea8afaf14068ab8a896505f0830e18e2b2603": "a67e436b4bf4287894c71e91c4c7ff48",
".git/objects/18/8e6d1dbfac24d5ebf570b931fa0ba1454b3a89": "04a36358c9a644bbf328839954f81f32",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/229f9b793f9aaa2e2b7d3bb02592bd9a2c6f37": "021a79d9141177842ca309c7f0953118",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/3fc0938bb7ad976cc02480bca6cf56011bf9b1": "a1986c2acce83c0a5b0fed1669e66ce7",
".git/objects/34/7cba14f653086d660138f8c3741210411284e4": "297bd9454419cb9268b80400c32e73bb",
".git/objects/39/4da4405f6904ad64d9802ea46a5c5ae90b4626": "f2603988a175e6c2cb599fb85c1f0b20",
".git/objects/3c/997dec51449573ed9b1161a5e2bed71ca98f8d": "51fbba49a58ca0cff63e1173fb5126b5",
".git/objects/3e/c0d889c5a27d3f76022876275ec6abb132adf8": "3fe82087752fad66183479f655669618",
".git/objects/3e/eedbce3b4f10732d00e2e148eae726df002fed": "daaebe46d1aba453e30b4f41f404e43f",
".git/objects/41/31201cda8afed7ab69b7d0b4f8f7e4345c973c": "56011f105f47508ca1a0c5dd59246cf3",
".git/objects/45/5536726a49562074d6a38ab94773ffc4d09a91": "3950e23328633a7d00cf740f46161a80",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/fac47569e8c9afb6c1298148bee9d8776fdd44": "1825c1de4e1e441152b7cd6accadd144",
".git/objects/56/e09a7ca600bf18722e2353fb4c0dd818e21926": "0e2c0bd05c4373141a50cdceeef10bac",
".git/objects/56/e3394b937e1c460b2480f34f486178e96b2cc0": "8e1fe26c89a0c9b62e8ca8ea41dd4c91",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/7de9f5d17ce0b01ec6d47a73983d8528eea12a": "b7cb59aa5587ec61ad799eb3f23469ea",
".git/objects/62/c1052fb2da17b40dde569a1a27b93ead8b44c4": "74e03922435c185017489e1ae7a44fe2",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/468668497a970ee5ff2120eb22ee8230ef6051": "22347eba4c856f46b8ea4fb033e5ed67",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/f20d6c91836820904a332fabaf4226851d7a34": "c499e94c6ff881910dd3dbb70be0624c",
".git/objects/79/0055a013ac496cf69db232737b292f102e5feb": "4e179a19f3243e798a32293faaa29c4a",
".git/objects/7e/580dbc593950e512b6bf8550d478a06650c804": "93823f6fabf97af5f8091d57b40e8115",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/98189ffcb857fbfdbb10040c682f56b4435c1c": "19a3f4e4544674449e8fba15f04c2c53",
".git/objects/9b/2161ed97c0225b5636c823e9cd140b47d0745d": "db12b528280824a3a07f724c0abe454c",
".git/objects/9b/eca84deddb2c55b2d78bb0de918eb8d0f88dac": "89ded289d04f41765a032132be8fb8ed",
".git/objects/9e/7503fb53d31a5bb33b6b18d21dd7e2dd730bad": "e920af123741b72c0c0fcc1426ac2d71",
".git/objects/aa/945ff2edc6758bee1bb711480b587621e081ff": "849eebdfd65cc0aa094be84964151c2b",
".git/objects/af/78382974d56756600b9520f0b4612ecde21fe9": "e3dabd45898d4c387343bc71c9d4f7c1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/3dcc229ad2fc84aa0aa091dce9806e82510b29": "506fdf56de2018b9b12b622d6bff7122",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/44e91567ad63d13d78dbb4eab2c3ed2580efa1": "2e533f1480d0d51f350700fc42680cc5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/826146426200ae53415609ec3b4ba65be88ca7": "7730bdf9d633df8492d9795500db03f4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/f37fb884bbc0d05a08221a7ae0ad1c17832323": "208b8c90ef789b4fae7646163b993b16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/d2d285b3718a29fe5f8813594c7af72a63ebc5": "3351d2e6d704cb926d854d85f9db574a",
".git/objects/dc/e25e4015abd6d5a46cbdb5dfc56e1283db481b": "3aa07d9b71eea00b8bd1d9017f5abccb",
".git/objects/df/9d934c4116a144688e821bf447b65603f1dda4": "b0587854bc4f62654e7795289d8f946b",
".git/objects/e4/e22aab0f30775dec916be791dd2cc064056ad4": "abdd0d44db571bbeaf436ef17f7283df",
".git/objects/e8/560c11bf944554dd539cfe64b66d1a0a4a03fd": "b4d929fa7082a3b515624a3e2be8802c",
".git/objects/e9/197492811f19c2e712ffff68e2d5bb6211e003": "5c1fee746cbdc29693654892e23a9dc9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/43d8e96e7524de2845917f7e0ffb8c1623f4b0": "c5fa9dd578f2ac46d7d6ddcdc73a07a3",
".git/objects/ef/d8c80c798ed4c3c20e98232e613951ccd20f82": "10383a7d60e88abf8870e3fb479d640a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/c64aec23cb49de90e98946d1171d37afed6ddf": "035ac2508dd379787332db577d58274f",
".git/objects/f6/420bb641ae9cdce48384090f1b02e1065a141b": "a4cfa6d7e567a50dcf897a4d133d8dc4",
".git/objects/f9/51b956dc024adc47b8b296dac61c47e7a8c2d1": "fb32645a85ffb149e2cca73251ff6ea0",
".git/objects/fd/4549e2a09baea241901aa89e0ec33feab67b4d": "23fb2879a5d05df395695f1a90c89024",
".git/ORIG_HEAD": "c4b2e4ef2aebf5b4fd853b8104c9ed07",
".git/refs/heads/main": "c4b2e4ef2aebf5b4fd853b8104c9ed07",
".git/refs/remotes/origin/main": "c4b2e4ef2aebf5b4fd853b8104c9ed07",
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
"flutter_bootstrap.js": "1cf038a21435834d5ba93a1825798bf9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be28f07d2772e56fb24b084192535a07",
"/": "be28f07d2772e56fb24b084192535a07",
"main.dart.js": "1960e8c06207c36a80bbccb7a1d92532",
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
