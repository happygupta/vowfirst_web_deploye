'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "65850c4df25edd1161ab17f1439fffac",
".git/config": "92937966e6baa4ef6aa9e4b9e7afed20",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "def964ef5980ad234c87359aedea43cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b56a16c7d27ccee609cd35347cee05b",
".git/logs/refs/heads/master": "7940ef52b8857c9229d643983a542bac",
".git/logs/refs/remotes/origin/master": "ff04c19674c0eaf751086230dabebdb8",
".git/objects/0b/f1608105b213de0002397b965045664bd7766e": "8aed08110d7a9d70ffe5120ee2a9d1c0",
".git/objects/0e/ae174a876284263a0e9a8cd5cfcdcf3989efaa": "44d797e265b18ebc96e037d2537ee8f9",
".git/objects/16/216614753ccfc6182ae6efe143273899b76bf9": "f10dcd13e6b4d12aad3c0423b8c151a5",
".git/objects/17/3f382fea6908acc9feb00d91400eccc8f273be": "8cca1dd6f76e3e8863122f55119c3e8f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/81e0d46f4def19ca9ddccca0481cf3fbab4c94": "a3e09396373a05b91e9fad0b51d54f22",
".git/objects/26/83338237056e113b67abf1aa0f443e45e50dd2": "48754adcaa815775c124ef6eea650932",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/85dfcc88b562920b717cb391ebfcb3bcd3004e": "87bceb61b406b48afaccb0fe5578afa0",
".git/objects/3a/02177659788e517b15cf51eae2fb259e7a3b30": "2b53a5f06817314eaf91118e7380c7f2",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/112f2588938b4a3656f56a39bc4fc26959eec8": "6dcc09e56f195fea56cdcd1ad02d7fe8",
".git/objects/4a/c8e4d1a20f123b9b54ebf33dbfee7f1fa32977": "407c65be598ad211a8636fca8bd44e8b",
".git/objects/53/31aad39e72d18ee5d23c7e2704b38fb9b9d0bd": "b02ebe2e9bd40379b71bc244cd400b35",
".git/objects/55/9ba39514aae6c001ba8ae4397cc7f5bca52d7b": "f3f7d2d11c967743dc2475cc8afa4982",
".git/objects/59/ef7a9cd92e1fa593ead6c4fd0e82b14e947d12": "77ee670a317f829243a506cc45de0929",
".git/objects/7e/22444495fb08f44d2c551946f5db0c69c35717": "5e5040fb453c467921a1eb0ed5eb6161",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/e2092fe0b88eae094483938e3547f8d1c99f50": "65de7123265d53be235ef4f1ec9884f0",
".git/objects/9e/155024034b745664bb666c09103d8852eee430": "0a18abcbfc1e4d66ed918eb366e9d4df",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/cbce7cf2aecf36769c07f2b8c7305a2625e69b": "b938af7f9da63a7e2c3d638b2597ba22",
".git/objects/b5/0e6adfe290b79a6777f3fc449aa41aa48dc2b3": "8b7c2922ca9d62dbc04d0f4426bdff7d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/af305f83bc3e2066f507f9df5a729e64450b95": "fffa70822a1aec271be476a64835390c",
".git/objects/e6/f31f512650d8359597b2b0bdfa628641ea744a": "bd7bf2c7e1fec17106324d87fea25d42",
".git/objects/f8/ee0df9491331cbfc990a524b5d6b780fdefed9": "7d5d7fc16d549df7c339176a0151abcb",
".git/refs/heads/master": "676077fcdf7c0b363a3874a44bde7f2c",
".git/refs/remotes/origin/master": "676077fcdf7c0b363a3874a44bde7f2c",
"assets/AssetManifest.json": "e878b617e467775c49f264d6ecb8647a",
"assets/assets/dash.jpg": "125c4dcaf042f6ae0de27cd324e8bf08",
"assets/assets/favicon.ico": "3d7877082a3338a665e291eb3de79b0f",
"assets/assets/logo.png": "f40798460ea05b8005f3ed85c855534d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "bcb2b17ed3da531194dec9c6823814f2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ebc3308cc8e915f517b1cb6eb87045c3",
"/": "ebc3308cc8e915f517b1cb6eb87045c3",
"main.dart.js": "19b27f7f399c0e45948911c53e4a6c2e",
"manifest.json": "783701554e30a1233a5286908ee3fe79",
"version.json": "7f3b580803e19a6ea62af738b534325b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
