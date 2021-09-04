'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8c8d9dab9769aea8c014d89c1ad68d5e",
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
".git/index": "65a16cffa3d474ee86d5f1e67efb9a67",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cee687d5153691d7e9cb133f582fbd42",
".git/logs/refs/heads/master": "8aae61e93ab40fd1c58bccf284927c48",
".git/logs/refs/remotes/origin/master": "68993945c230e0a08aece89d3f77a942",
".git/objects/00/da763a4202c4a75398d791f35748364ba6774e": "b6dfd3571c9d17fa23294c823ec361b0",
".git/objects/01/814e8bb1039c3ea36cf147356ed15baa47a7c5": "d326e84c3b15c5346fc8d25d6513cdb0",
".git/objects/03/c7657c51ee2a059e292f248f8202ac90918613": "ba3289402c9a65e829c1b54d86901372",
".git/objects/04/b3e3a89a5b01fc137042627d2a2188f20aa9e7": "def2ff72bb5eee83f0ec4d5da3dbc67c",
".git/objects/0b/f1608105b213de0002397b965045664bd7766e": "8aed08110d7a9d70ffe5120ee2a9d1c0",
".git/objects/0e/ae174a876284263a0e9a8cd5cfcdcf3989efaa": "44d797e265b18ebc96e037d2537ee8f9",
".git/objects/14/342660c42106fb96589357d36c207e23dac717": "0d5965127d49de53ee57153cb3f860a1",
".git/objects/16/216614753ccfc6182ae6efe143273899b76bf9": "f10dcd13e6b4d12aad3c0423b8c151a5",
".git/objects/17/3f382fea6908acc9feb00d91400eccc8f273be": "8cca1dd6f76e3e8863122f55119c3e8f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/81e0d46f4def19ca9ddccca0481cf3fbab4c94": "a3e09396373a05b91e9fad0b51d54f22",
".git/objects/26/83338237056e113b67abf1aa0f443e45e50dd2": "48754adcaa815775c124ef6eea650932",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/85dfcc88b562920b717cb391ebfcb3bcd3004e": "87bceb61b406b48afaccb0fe5578afa0",
".git/objects/3a/02177659788e517b15cf51eae2fb259e7a3b30": "2b53a5f06817314eaf91118e7380c7f2",
".git/objects/3a/65e89d5670bfda11671811fcb222203a84f0cc": "bd78156f660d0c090e1c96afeaa5756c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/112f2588938b4a3656f56a39bc4fc26959eec8": "6dcc09e56f195fea56cdcd1ad02d7fe8",
".git/objects/3d/ea9f98922f585dc9589c63ab51ef4a4e861e43": "3ed9ff1034c35cd679a4acec41e0427c",
".git/objects/3f/35b13b2dc10ef0f4ccf5e6c8b8279e1b0973a3": "11b25b271aa8bf3b60d7f690f5599557",
".git/objects/4a/c8e4d1a20f123b9b54ebf33dbfee7f1fa32977": "407c65be598ad211a8636fca8bd44e8b",
".git/objects/4e/77e79df4a6a5158028897254ab8f8deb2ac974": "bdb167d1e09a93f0a0a712eba3277f64",
".git/objects/53/31aad39e72d18ee5d23c7e2704b38fb9b9d0bd": "b02ebe2e9bd40379b71bc244cd400b35",
".git/objects/54/e908d61a13896e06a0a62dedcc186dbbea3480": "642f369edf3ecdd8151f1dcd63516d3a",
".git/objects/55/9ba39514aae6c001ba8ae4397cc7f5bca52d7b": "f3f7d2d11c967743dc2475cc8afa4982",
".git/objects/59/ef7a9cd92e1fa593ead6c4fd0e82b14e947d12": "77ee670a317f829243a506cc45de0929",
".git/objects/5e/aad34b208eb230e342ebf01e80e4c5b7f8b50d": "784b1c30391c0120d08b0638ad258aa0",
".git/objects/7e/22444495fb08f44d2c551946f5db0c69c35717": "5e5040fb453c467921a1eb0ed5eb6161",
".git/objects/7e/288b6b6c4c18db6fbc90a1b9b6a5000d2c92ff": "969161420c0d39506569f91a2ffb8aef",
".git/objects/88/be4ef3ecb001f015bfb2f297f1316332740bf7": "27baaf769ec675681e97ede76acb9097",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f28cf40239403ec803d15845758ed64ce38ff7": "e3a49d7f0cf4a18d4294477ee24a805c",
".git/objects/98/e2092fe0b88eae094483938e3547f8d1c99f50": "65de7123265d53be235ef4f1ec9884f0",
".git/objects/9d/3abf6c34fdaad10153d02f8a0981e856745a39": "d9becfc7d2288f7398ba9c19f0a39b38",
".git/objects/9d/910940fcc5f2b01271ea5e305d83a8877c35df": "cb6bae7bf913c4d7e6077ad9a8877119",
".git/objects/9e/155024034b745664bb666c09103d8852eee430": "0a18abcbfc1e4d66ed918eb366e9d4df",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9f/887ad44873d5dd42ab263484a42cee84cde507": "2266b1f01bed9ac3fa8ba7764309a88b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/cbce7cf2aecf36769c07f2b8c7305a2625e69b": "b938af7f9da63a7e2c3d638b2597ba22",
".git/objects/b5/0e6adfe290b79a6777f3fc449aa41aa48dc2b3": "8b7c2922ca9d62dbc04d0f4426bdff7d",
".git/objects/b7/3f48fe4e7538d9ad5ceebdea28d20edbbfb676": "04f87023fc768937bb321815c9cd9cda",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/b936a1d0c919eb93da17e3bde33a67e867b933": "cc7ea1d8d388f3413c3845deb0503f57",
".git/objects/c3/af305f83bc3e2066f507f9df5a729e64450b95": "fffa70822a1aec271be476a64835390c",
".git/objects/c4/8798ec4bc146e3d8b760b354751f606913b383": "366d38f5bf1ee8d13bdc74beacfa43de",
".git/objects/c4/e992f9047f2664c930c24593e4cc1cf51d63bc": "c08d57afe8dffcf087fbaada11446fc3",
".git/objects/c7/59bddbda98f524aed49fe5622679893143e3af": "511b97a169ea637d4043e388e1efa558",
".git/objects/d6/5b15673c2b9d2a4621fd0bab2fa19509799e7e": "a02f2b5fda2e7d62a4637938dce4cfd2",
".git/objects/e6/f31f512650d8359597b2b0bdfa628641ea744a": "bd7bf2c7e1fec17106324d87fea25d42",
".git/objects/e7/e4bf0dedb811cbf01856f856e2aea4b42b593d": "370cf0ac65ccae43a0fb6368b7a7f966",
".git/objects/e8/bd1b5ce4e18514286e532cff57a19a8389d1a8": "55b9edb289c57ac1fd57cadf21dda811",
".git/objects/f8/ee0df9491331cbfc990a524b5d6b780fdefed9": "7d5d7fc16d549df7c339176a0151abcb",
".git/refs/heads/master": "56ce4b7639cf7f0131af17359151cdff",
".git/refs/remotes/origin/master": "56ce4b7639cf7f0131af17359151cdff",
"assets/AssetManifest.json": "cc427785666ee268b424d8a77a640f1c",
"assets/assets/choice.gif": "bae4b6a6c7b157ee4f07b537b8bf95d3",
"assets/assets/dash.jpg": "125c4dcaf042f6ae0de27cd324e8bf08",
"assets/assets/favicon.ico": "3d7877082a3338a665e291eb3de79b0f",
"assets/assets/form.gif": "e03ba0b5d26ca9a79b559ce922c48b62",
"assets/assets/insurance1.jpg": "cc0e0c5eb7c8636493f38812d9cabadd",
"assets/assets/json/70352.json": "bc48bb3065bff45d3a8272850dfe0f87",
"assets/assets/json/form.json": "27478a9f4d07cf12ba629cc5eecd28d4",
"assets/assets/logo.png": "f40798460ea05b8005f3ed85c855534d",
"assets/assets/mail.gif": "7e10d179cb78d521a92671107c70ba13",
"assets/assets/top.jpg": "586caf40af2d3ef2f81d25e20183d5a2",
"assets/assets/top1.jpg": "9729dafac90ccfa39eddd78dafddb6eb",
"assets/assets/top2.jpg": "6a79172f0da7a9b2d36fdc339b838e6f",
"assets/assets/top3.jpg": "cfdc29a5f0ceed48e28874e7092dec82",
"assets/FontManifest.json": "2383699896873fbd2cab02831d9303a0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3ee5131fec6fcd130a4dc56eab47b382",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3c0ae8d0d5007545f80d6ac753f56bff",
"/": "3c0ae8d0d5007545f80d6ac753f56bff",
"main.dart.js": "7cf349d335f9708089e3bcdcf0c05292",
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
