/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/51b7ac2a32dbd9f9a8b4.woff2";

/***/ }),

/***/ 655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/f955bf9c1916545f4f8e.ttf";

/***/ }),

/***/ 29:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/4b8d1d12b9574544ab39.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/image.jpg
const image_namespaceObject = __webpack_require__.p + "images/6373cac8eccfb40124d1.jpg";
// EXTERNAL MODULE: ./src/fonts/ofont.ru_Arial Narrow.ttf
var ofont_ru_Arial_Narrow = __webpack_require__(29);
// EXTERNAL MODULE: ./src/fonts/arialnarrow_bold.ttf
var arialnarrow_bold = __webpack_require__(655);
;// ./src/fonts/arialnarrow_italic.ttf
const arialnarrow_italic_namespaceObject = __webpack_require__.p + "fonts/465dc0649679f65097f5.ttf";
;// ./src/fonts/arialnarrow_bolditalic.ttf
const arialnarrow_bolditalic_namespaceObject = __webpack_require__.p + "fonts/c599e2aafc499a21372d.ttf";
;// ./src/index.js






console.log(__webpack_require__(29));
console.log(__webpack_require__(655));
console.log(__webpack_require__(210));
document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('.A_Chapters u[data-filter]');
  var cards = document.querySelectorAll('.M_Card');
  var showAllButton = document.querySelector('.A_ShowAllButton');
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      var selectedTag = filter.getAttribute('data-filter');
      cards.forEach(function (card) {
        var _card$querySelector;
        var cardTag = (_card$querySelector = card.querySelector('.A_CardTag p')) === null || _card$querySelector === void 0 ? void 0 : _card$querySelector.textContent.replace('#', '');
        if (cardTag === selectedTag) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  showAllButton.addEventListener('click', function () {
    cards.forEach(function (card) {
      card.style.display = 'flex';
    });
  });
});
/******/ })()
;