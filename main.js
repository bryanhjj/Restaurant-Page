/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addP(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
};

function aboutUs() {
    const about = document.createElement("div");
    about.classList.add("about-us");
    about.id = "about-us";

    const odinImg = document.createElement("img");
    odinImg.src = "../assets/odin.jpg";
    odinImg.alt = "A picture of Odin.";

    about.appendChild(odinImg);
    about.appendChild(addP("During c. 5 BCE, our lord Odin grew tired of the inadequate cooking and offerings from his followers and decided to take matters into his own hands."));
    about.appendChild(addP("And thus, begins our lords' culinary career"));
    about.appendChild(addP("Have a taste of our famous mead, or our prized smoked sheep meat so delicious it's as if your tastebuds have transcended to Valhalla!"));
    about.appendChild(addP("Come visit us or order online today!"));

    return about;
};

function aboutUsLoader() {
    const content = document.getElementById("content");
    content.appendChild(aboutUs());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutUsLoader);

/***/ }),

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addP(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
};

function contactUs() {
    const contact = document.createElement("div");
    contact.classList.add("contact-us");
    contact.id = "contact-us";

    const location = document.createElement("img");
    location.src = "../assets/asgard.jpg";
    location.alt = "A map showing where our restaurant is located."

    contact.appendChild(addP("Phone: 012 345 678"));
    contact.appendChild(addP("Email: odinrestaurant@asgard.com"));
    contact.appendChild(location);

    return contact;
};

function contactUsLoader() {
    const content = document.getElementById("content");
    content.appendChild(contactUs());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUsLoader);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addP(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
};


function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.id = "home";

    home.appendChild(addP("The best restaurant in Asgard!"));
    home.appendChild(addP("Founded by our lord Odin himself!"));

    return home;
};

function homeLoader() {
    const content = document.getElementById("content");
    content.appendChild(createHome());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoader);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");

    const home = document.createElement("button");
    const aboutUs = document.createElement("button");
    const contactUs = document.createElement("button");

    home.innerHTML = "Home";
    aboutUs.innerHTML = "About Us";
    contactUs.innerHTML = "Contact Us";

    home.classList.add("home");
    aboutUs.classList.add("about-us");
    contactUs.classList.add("contact-us");

    /* initially the plan was just to create links to specific sections of the same webpage, change of plans 
    home.href = "#home";
    aboutUs.href = "#about-us";
    contactUs.href = "#contact-us";
    */

    navBar.appendChild(home);
    navBar.appendChild(aboutUs);
    navBar.appendChild(contactUs);

    return navBar;
};

function navBarLoader() {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.appendChild(createNavBar());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBarLoader);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUs */ "./src/aboutUs.js");
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactUs */ "./src/contactUs.js");





function createHeader() {
    const header = document.createElement("header");
    const buttonContainer = document.getElementById("button-container");
    header.classList.add("header");
    header.textContent = "The Odin Restaurant";
    buttonContainer.appendChild(header);
};

function divInitialize() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    createHeader();
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.default)(); 
};

divInitialize();

const homeButton = document.querySelector(".home");
const aboutUsButton = document.querySelector(".about-us");
const contactUsButton = document.querySelector(".contact-us");

homeButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
});

aboutUsButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    (0,_aboutUs__WEBPACK_IMPORTED_MODULE_2__.default)();
});

contactUsButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    (0,_contactUs__WEBPACK_IMPORTED_MODULE_3__.default)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7QUM3QjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRTs7Ozs7Ozs7Ozs7Ozs7QUMzQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7O0FDdkJ6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEU7Ozs7OztVQ2xDM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDSjtBQUNNO0FBQ0k7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBWSxHO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBZTtBQUNuQixDQUFDLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZFAodGV4dCkge1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICByZXR1cm4gcDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFib3V0VXMoKSB7XHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIik7XHJcbiAgICBhYm91dC5pZCA9IFwiYWJvdXQtdXNcIjtcclxuXHJcbiAgICBjb25zdCBvZGluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG9kaW5JbWcuc3JjID0gXCIuLi9hc3NldHMvb2Rpbi5qcGdcIjtcclxuICAgIG9kaW5JbWcuYWx0ID0gXCJBIHBpY3R1cmUgb2YgT2Rpbi5cIjtcclxuXHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChvZGluSW1nKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFkZFAoXCJEdXJpbmcgYy4gNSBCQ0UsIG91ciBsb3JkIE9kaW4gZ3JldyB0aXJlZCBvZiB0aGUgaW5hZGVxdWF0ZSBjb29raW5nIGFuZCBvZmZlcmluZ3MgZnJvbSBoaXMgZm9sbG93ZXJzIGFuZCBkZWNpZGVkIHRvIHRha2UgbWF0dGVycyBpbnRvIGhpcyBvd24gaGFuZHMuXCIpKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFkZFAoXCJBbmQgdGh1cywgYmVnaW5zIG91ciBsb3JkcycgY3VsaW5hcnkgY2FyZWVyXCIpKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFkZFAoXCJIYXZlIGEgdGFzdGUgb2Ygb3VyIGZhbW91cyBtZWFkLCBvciBvdXIgcHJpemVkIHNtb2tlZCBzaGVlcCBtZWF0IHNvIGRlbGljaW91cyBpdCdzIGFzIGlmIHlvdXIgdGFzdGVidWRzIGhhdmUgdHJhbnNjZW5kZWQgdG8gVmFsaGFsbGEhXCIpKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFkZFAoXCJDb21lIHZpc2l0IHVzIG9yIG9yZGVyIG9ubGluZSB0b2RheSFcIikpO1xyXG5cclxuICAgIHJldHVybiBhYm91dDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFib3V0VXNMb2FkZXIoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRVc0xvYWRlcjsiLCJmdW5jdGlvbiBhZGRQKHRleHQpIHtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0VXMoKSB7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdXNcIik7XHJcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0LXVzXCI7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbG9jYXRpb24uc3JjID0gXCIuLi9hc3NldHMvYXNnYXJkLmpwZ1wiO1xyXG4gICAgbG9jYXRpb24uYWx0ID0gXCJBIG1hcCBzaG93aW5nIHdoZXJlIG91ciByZXN0YXVyYW50IGlzIGxvY2F0ZWQuXCJcclxuXHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZFAoXCJQaG9uZTogMDEyIDM0NSA2NzhcIikpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRQKFwiRW1haWw6IG9kaW5yZXN0YXVyYW50QGFzZ2FyZC5jb21cIikpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3Q7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb250YWN0VXNMb2FkZXIoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VXMoKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0VXNMb2FkZXI7IiwiZnVuY3Rpb24gYWRkUCh0ZXh0KSB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIHJldHVybiBwO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgICBob21lLmlkID0gXCJob21lXCI7XHJcblxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChhZGRQKFwiVGhlIGJlc3QgcmVzdGF1cmFudCBpbiBBc2dhcmQhXCIpKTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWRkUChcIkZvdW5kZWQgYnkgb3VyIGxvcmQgT2RpbiBoaW1zZWxmIVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGhvbWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBob21lTG9hZGVyKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVMb2FkZXI7IiwiZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpO1xyXG5cclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XHJcbiAgICBhYm91dFVzLmlubmVySFRNTCA9IFwiQWJvdXQgVXNcIjtcclxuICAgIGNvbnRhY3RVcy5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcclxuXHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIik7XHJcbiAgICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdXNcIik7XHJcblxyXG4gICAgLyogaW5pdGlhbGx5IHRoZSBwbGFuIHdhcyBqdXN0IHRvIGNyZWF0ZSBsaW5rcyB0byBzcGVjaWZpYyBzZWN0aW9ucyBvZiB0aGUgc2FtZSB3ZWJwYWdlLCBjaGFuZ2Ugb2YgcGxhbnMgXHJcbiAgICBob21lLmhyZWYgPSBcIiNob21lXCI7XHJcbiAgICBhYm91dFVzLmhyZWYgPSBcIiNhYm91dC11c1wiO1xyXG4gICAgY29udGFjdFVzLmhyZWYgPSBcIiNjb250YWN0LXVzXCI7XHJcbiAgICAqL1xyXG5cclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lKTtcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dFVzKTtcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xyXG5cclxuICAgIHJldHVybiBuYXZCYXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBuYXZCYXJMb2FkZXIoKSB7XHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyTG9hZGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5hdkJhckxvYWRlciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IGhvbWVMb2FkZXIgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgYWJvdXRVc0xvYWRlciBmcm9tIFwiLi9hYm91dFVzXCI7XHJcbmltcG9ydCBjb250YWN0VXNMb2FkZXIgZnJvbSBcIi4vY29udGFjdFVzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udGFpbmVyXCIpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoZSBPZGluIFJlc3RhdXJhbnRcIjtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGl2SW5pdGlhbGl6ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjcmVhdGVIZWFkZXIoKTtcclxuICAgIG5hdkJhckxvYWRlcigpOyBcclxufTtcclxuXHJcbmRpdkluaXRpYWxpemUoKTtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmNvbnN0IGFib3V0VXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LXVzXCIpO1xyXG5jb25zdCBjb250YWN0VXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtdXNcIik7XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaG9tZUxvYWRlcigpO1xyXG59KTtcclxuXHJcbmFib3V0VXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBhYm91dFVzTG9hZGVyKCk7XHJcbn0pO1xyXG5cclxuY29udGFjdFVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29udGFjdFVzTG9hZGVyKCk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=