/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/links */ \"./src/js/links.js\");\n/* harmony import */ var _js_task_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/task-1 */ \"./src/js/task-1.js\");\n/* harmony import */ var _js_task_1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_task_1__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_task_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/task-2 */ \"./src/js/task-2.js\");\n/* harmony import */ var _js_task_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/task-3 */ \"./src/js/task-3.js\");\n/* harmony import */ var _js_task_3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_task_3__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/links.js":
/*!*************************!*\
  !*** ./src/js/links.js ***!
  \*************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\nconst users = [\r\n  { name: 'Mango', active: true },\r\n  { name: 'Poly', active: false },\r\n  { name: 'Ajax', active: true },\r\n  { name: 'Lux', active: false },\r\n];\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/links.js?");

/***/ }),

/***/ "./src/js/task-1.js":
/*!**************************!*\
  !*** ./src/js/task-1.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const delay = ms => {\r\n  const tieme = ms;\r\n  return Promise.resolve(tieme);\r\n};\r\n\r\nconst logger = time => console.log(`Resolved after ${time}ms`);\r\n\r\ndelay(2000).then(logger);\r\ndelay(1000).then(logger);\r\ndelay(1500).then(logger);\r\n\n\n//# sourceURL=webpack:///./src/js/task-1.js?");

/***/ }),

/***/ "./src/js/task-2.js":
/*!**************************!*\
  !*** ./src/js/task-2.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./links */ \"./src/js/links.js\");\n\r\n\r\nconst toggleUserState = (allUsers, userName) => {\r\n  const updatedUsers = allUsers.map(user =>\r\n    user.name === userName ? { ...user, active: !user.active } : user,\r\n  );\r\n\r\n  return Promise.resolve(updatedUsers);\r\n};\r\n\r\nconst logger = message => console.log(message);\r\n\r\ntoggleUserState(_links__WEBPACK_IMPORTED_MODULE_0__[\"users\"], 'Mango').then(logger);\r\ntoggleUserState(_links__WEBPACK_IMPORTED_MODULE_0__[\"users\"], 'Lux').then(logger);\r\n\n\n//# sourceURL=webpack:///./src/js/task-2.js?");

/***/ }),

/***/ "./src/js/task-3.js":
/*!**************************!*\
  !*** ./src/js/task-3.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const randomIntegerFromInterval = (min, max) => {\r\n  return Math.floor(Math.random() * (max - min + 1) + min);\r\n};\r\n\r\nconst makeTransaction = transaction => {\r\n  const delay = randomIntegerFromInterval(200, 500);\r\n\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      const canProcess = Math.random() > 0.3;\r\n\r\n      if (canProcess) {\r\n        resolve(logSuccess(transaction.id, delay));\r\n      } else {\r\n        reject(logError(transaction.id));\r\n      }\r\n    }, delay);\r\n  });\r\n};\r\nconst logSuccess = (id, time) => {\r\n  console.log(`Transaction ${id} processed in ${time}ms`);\r\n};\r\n\r\nconst logError = id => {\r\n  console.warn(`Error processing transaction ${id}. Please try again later.`);\r\n};\r\n\r\nmakeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);\r\n\r\nmakeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);\r\n\r\nmakeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);\r\n\r\nmakeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);\r\n\n\n//# sourceURL=webpack:///./src/js/task-3.js?");

/***/ })

/******/ });