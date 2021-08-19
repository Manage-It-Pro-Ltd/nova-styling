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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/components/NovaDarkThemeToggle.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/NovaDarkThemeToggle.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nTypeError: Cannot read property 'parseComponent' of undefined\n    at parse (E:\\Websites\\nova-styling\\node_modules\\@vue\\component-compiler-utils\\dist\\parse.js:15:23)\n    at Object.module.exports (E:\\Websites\\nova-styling\\node_modules\\vue-loader\\lib\\index.js:67:22)");

/***/ }),

/***/ "./resources/js/theme.js":
/*!*******************************!*\
  !*** ./resources/js/theme.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router) {
  Vue.component("nova-dark-theme-toggle", __webpack_require__(/*! ./components/NovaDarkThemeToggle */ "./resources/js/components/NovaDarkThemeToggle.vue"));
});

if (localStorage.darkThemeOn === "true") {
  document.querySelector("html").classList.add("nova-dark-theme");
  document.querySelector("body").classList.add("nova-dark-theme");
} else {
  document.querySelector("html").classList.remove("nova-dark-theme");
  document.querySelector("body").classList.remove("nova-dark-theme");
}

function load() {
  // Set viewport
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute("content", "width=device-width, initial-scale=1, shrink-to-fit=no"); // Add hidden class to sidebar

  var sidebar = document.querySelector(".w-sidebar");
  sidebar.classList.add("sidebar-hidden"); // Add hamburger menu to header

  var hamburger = document.createElement("span");
  hamburger.className = "hamburger-menu";
  var contentHeader = document.querySelector(".content .h-header");
  contentHeader.prepend(hamburger); // Hamburger click event

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    var sidebar = document.querySelector(".w-sidebar");
    sidebar.classList.toggle("sidebar-hidden");
  }, true);
  var sidebarLinks = document.querySelectorAll(".w-sidebar a, .w-sidebar .cursor-pointer:not(.nc-head), .w-sidebar .nc-item-link");
  sidebarLinks.forEach(function (sidebarLink) {
    sidebarLink.addEventListener("click", function () {
      var sidebar = document.querySelector(".w-sidebar");
      sidebar.classList.add("sidebar-hidden");
    }, false);
  }); // Hide sidebar when clicking outside

  var rootElements = document.querySelectorAll("body,html");
  rootElements.forEach(function (rootElement) {
    rootElement.addEventListener("click", function (e) {
      var sidebar = document.querySelector(".w-sidebar");

      if (e.target !== sidebar && !sidebar.contains(e.target)) {
        sidebar.classList.add("sidebar-hidden");
      }
    });
  }); // Config based theme tweaking

  if (Nova.config.mmns) {
    // Hide sidebar headlines
    var sidebarHeadlines = document.querySelectorAll(".w-sidebar h4");
    sidebarHeadlines.forEach(function (sidebarHeadline) {
      if (Nova.config.mmns.hide_all_sidebar_headlines || Nova.config.mmns.hidden_sidebar_headlines.indexOf(sidebarHeadline.textContent) !== -1) {
        sidebarHeadline.classList.add("hidden");
      }
    }); // Sticky resource table actions

    if (Nova.config.mmns.resource_tables_sticky_actions) {
      var contents = document.querySelectorAll(".content");
      contents.forEach(function (content) {
        content.classList.add("sticky-actions");
      });
    }

    if (Nova.config.mmns.resource_tables_sticky_actions_on_mobile) {
      var contents = document.querySelectorAll(".content");
      contents.forEach(function (content) {
        content.classList.add("sticky-actions-on-mobile");
      });
    } // Hide "Update & Continue Editing" button


    if (Nova.config.mmns.hide_update_and_continue_editing_button) {
      var contents = document.querySelectorAll(".content");
      contents.forEach(function (content) {
        content.classList.add("hide-update-and-continue-editing-button");
      });
    }

    if (Nova.config.mmns.hide_update_and_continue_editing_button_on_mobile) {
      var contents = document.querySelectorAll(".content");
      contents.forEach(function (content) {
        content.classList.add("hide-update-and-continue-editing-button-on-mobile");
      });
    } // Fixed sidebar on desktop


    if (Nova.config.mmns.fixed_sidebar) {
      document.querySelector("body").classList.add("fixed-sidebar");
    }
  }
}

document.addEventListener("DOMContentLoaded", load, false);

/***/ }),

/***/ "./resources/sass/dark.scss":
/*!**********************************!*\
  !*** ./resources/sass/dark.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./resources/js/theme.js ./resources/sass/dark.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\Websites\nova-styling\resources\js\theme.js */"./resources/js/theme.js");
module.exports = __webpack_require__(/*! E:\Websites\nova-styling\resources\sass\dark.scss */"./resources/sass/dark.scss");


/***/ })

/******/ });