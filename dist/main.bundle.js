/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
Set.prototype.isSuperSet = function (subSet) {
    return [...subSet].every(val => this.has(val));
};
Set.prototype.isSubSet = function (superSet) {
    return [...this].every(val => superSet.has(val));
};
Set.prototype.union = function (...sets) {
    return sets.reduce(function (acc, set) {
        return new Set([...acc, ...set]);
    }, new Set([...this]));
};
Set.prototype.intersection = function (...sets) {
    return true;
};
exports.default = {};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./utilities */ "./src/utilities.ts");
const set1 = new Set([1, 2, 3, 4, 5, 6]);
const set2 = new Set([4, 5, 6]);
const y = set1.isSuperSet(set2);
console.log(y);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1dGlscy8uL3NyYy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vc2V0dXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXRpbHMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBbUJDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVMsTUFBZTtJQUNsRCxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUlBLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsUUFBaUI7SUFDbEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFNRCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFTLEdBQUcsSUFBZTtJQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFhLEVBQUUsR0FBYTtRQUN2RCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFPRCxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFTLEdBQUcsSUFBZTtJQUd0RCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFNRCxrQkFBZSxFQUFFOzs7Ozs7O1VDdERqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNZQSw2REFBcUI7QUFFckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHOUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBzZXR1dGlscyAxLjAuMFxyXG4gKiAoYykgSmF5IEd1cmF2IDIwMjFcclxuICovXHJcblxyXG5cclxuIGRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgU2V0PFQ+IHtcclxuICAgIGlzU3VwZXJTZXQoc3ViU2V0OlNldDxhbnk+KTogYm9vbGVhbjtcclxuICAgIGlzU3ViU2V0KHN1cGVyU2V0OiBTZXQ8YW55Pik6IGJvb2xlYW47XHJcbiAgICB1bmlvbiguLi5zZXRzOlNldDxhbnk+W10pOiBTZXQ8YW55PjtcclxuICAgIGludGVyc2VjdGlvbiguLi5zZXRzOlNldDxhbnk+W10pOiBib29sZWFuO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBpc1N1cGVyU2V0XHJcbiAqL1xyXG4gU2V0LnByb3RvdHlwZS5pc1N1cGVyU2V0ID0gZnVuY3Rpb24oc3ViU2V0OlNldDxhbnk+ICkgOmJvb2xlYW4ge1xyXG4gIHJldHVybiBbLi4uc3ViU2V0XS5ldmVyeSh2YWwgPT4gdGhpcy5oYXModmFsKSk7XHJcbn1cclxuLyoqXHJcbiAqIGlzU3ViU2V0KHN1cGVyc2V0KVxyXG4gKi9cclxuIFNldC5wcm90b3R5cGUuaXNTdWJTZXQgPSBmdW5jdGlvbihzdXBlclNldDpTZXQ8YW55PiApIDpib29sZWFuIHtcclxuICByZXR1cm4gWy4uLnRoaXNdLmV2ZXJ5KHZhbCA9PiBzdXBlclNldC5oYXModmFsKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogVW5pb25cclxuICovXHJcblNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbiguLi5zZXRzOlNldDxhbnk+W10gKSA6U2V0PGFueT4ge1xyXG4gIHJldHVybiBzZXRzLnJlZHVjZShmdW5jdGlvbiAoYWNjOiBTZXQ8YW55Piwgc2V0OiBTZXQ8YW55Pikge1xyXG4gICAgcmV0dXJuIG5ldyBTZXQoWy4uLmFjYywgLi4uc2V0XSk7XHJcbiAgfSwgbmV3IFNldChbLi4udGhpc10pKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcnNlY3Rpb25cclxuICovXHJcblxyXG5TZXQucHJvdG90eXBlLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKC4uLnNldHM6U2V0PGFueT5bXSApIDpib29sZWFuIHtcclxuICAvLyBjb25zdCBhcnJPZlNldHMgPSBzZXRzLmNvbmNhdCh0aGlzKS5tYXAoc2V0ID0+IFsuLi5zZXRdKTtcclxuICAvLyBjb25zb2xlLmxvZyhhcnJPZlNldHMpO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gLyoqXHJcbi8vICAqIHNldHV0aWxzIDEuMC4wXHJcbi8vICAqIChjKSBKYXkgR3VyYXYgMjAyMVxyXG4vLyAgKi9cclxuXHJcblxyXG4vLyBkZWNsYXJlIGdsb2JhbCB7XHJcbi8vICAgaW50ZXJmYWNlIFNldDxUPiB7XHJcbi8vICAgICB1bmlvbihzZXRzOlNldDxhbnk+W10pOiBTZXQ8YW55PjtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEBwYXJhbSB7U2V0PGFueT5bXX0gIHNldHMgLSBBIGFycmF5IG9mIHNldHNcclxuLy8gICogXHJcbi8vICAqIEByZXR1cm4ge1NldDxhbnk+fSBSZXR1cm5zIGEgdW5pb24gb2YgYWxsIHNldHNcclxuLy8gICovXHJcbi8vIFNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbihzZXRzOlNldDxhbnk+W10gKSA6U2V0PGFueT4ge1xyXG4vLyAgIHJldHVybiBzZXRzLnJlZHVjZShmdW5jdGlvbiAoYWNjOiBTZXQ8YW55Piwgc2V0OiBTZXQ8YW55Pikge1xyXG4vLyAgICAgcmV0dXJuIG5ldyBTZXQoWy4uLmFjYywgLi4uc2V0XSk7XHJcbi8vICAgfSwgbmV3IFNldChbLi4udGhpc10pKTtcclxuLy8gfVxyXG5cclxuLy8gLy8gY29uc3QgcyA9IG5ldyBTZXQoKTtcclxuXHJcbi8vIC8vIGNvbnN0IHkgPSBzLnVuXHJcbi8vIC8vIGNvbnN0IHkgPSBzLnVuaW9uKFtuZXcgU2V0KFszLFwiNDNcIiw1XSksIG5ldyBTZXQoWzcsNDEsOF0pXSk7XHJcblxyXG4vLyAvLyBjb25zb2xlLmxvZyh5KVxyXG4vLyBleHBvcnQgZGVmYXVsdCB7fVxyXG5cclxuXHJcbmltcG9ydCBcIi4vdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBzZXQxID0gbmV3IFNldChbMSwyLDMsIDQsIDUsIDZdKTtcclxuY29uc3Qgc2V0MiA9IG5ldyBTZXQoWzQsNSw2XSk7XHJcbi8vIGNvbnN0IHNldDMgPSBuZXcgU2V0KFs3LDgsOV0pO1xyXG5cclxuY29uc3QgeSA9IHNldDEuaXNTdXBlclNldChzZXQyKVxyXG5jb25zb2xlLmxvZyh5KTsiXSwic291cmNlUm9vdCI6IiJ9