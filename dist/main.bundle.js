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
    return sets.reduce((acc, set) => {
        return new Set([...acc, ...set]);
    }, this);
};
Set.prototype.symmetricDifference = function (...sets) {
    return sets.reduce((acc, curr) => {
        for (let elem of curr) {
            if (acc.has(elem)) {
                acc.delete(elem);
            }
            else {
                acc.add(elem);
            }
        }
        return acc;
    }, this);
};
Set.prototype.setDifference = function (...sets) {
    const unionOfSets = new Set(sets.reduce((acc, curr) => acc.concat([...curr]), []));
    return new Set([...this].filter(val => !unionOfSets.has(val)));
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
const set1 = new Set([1, 2, 3, 4, 9, 10]);
const set2 = new Set([3, 4, 5, 6]);
const set3 = new Set([7, 8, 9]);
const y = set1.setDifference(set2, set3);
console.log(y);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1dGlscy8uL3NyYy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vc2V0dXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXRpbHMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBcUJDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVMsTUFBZTtJQUNsRCxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUlBLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsUUFBaUI7SUFDbEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFRRCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFTLEdBQUcsSUFBZTtJQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFhLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDbEQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBb0JELEdBQUcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBUyxHQUFHLElBQWU7SUFDN0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBWSxFQUFFLElBQWEsRUFBWSxFQUFFO1FBQzNELEtBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFDO1lBQ25CLElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDZixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCO2lCQUFJO2dCQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBTUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBUyxHQUFHLElBQWU7SUFDdkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVMsRUFBRSxJQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFNRCxrQkFBZSxFQUFFOzs7Ozs7O1VDdkZqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNZQSw2REFBcUI7QUFFckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTlCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztBQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHNldHV0aWxzIDEuMC4wXHJcbiAqIChjKSBKYXkgR3VyYXYgMjAyMVxyXG4gKi9cclxuXHJcblxyXG4gZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBTZXQ8VD4ge1xyXG4gICAgaXNTdXBlclNldChzdWJTZXQ6U2V0PGFueT4pOiBib29sZWFuO1xyXG4gICAgaXNTdWJTZXQoc3VwZXJTZXQ6IFNldDxhbnk+KTogYm9vbGVhbjtcclxuICAgIHVuaW9uKC4uLnNldHM6U2V0PGFueT5bXSk6IFNldDxhbnk+O1xyXG4gICAgLy8gaW50ZXJzZWN0aW9uKC4uLnNldHM6U2V0PGFueT5bXSk6IGJvb2xlYW47XHJcbiAgICBzeW1tZXRyaWNEaWZmZXJlbmNlKC4uLnNldHM6U2V0PGFueT5bXSk6IFNldDxhbnk+O1xyXG4gICAgc2V0RGlmZmVyZW5jZSguLi5zZXRzOlNldDxhbnk+W10pOiBTZXQ8YW55PjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogaXNTdXBlclNldFxyXG4gKi9cclxuIFNldC5wcm90b3R5cGUuaXNTdXBlclNldCA9IGZ1bmN0aW9uKHN1YlNldDpTZXQ8YW55PiApIDpib29sZWFuIHtcclxuICByZXR1cm4gWy4uLnN1YlNldF0uZXZlcnkodmFsID0+IHRoaXMuaGFzKHZhbCkpO1xyXG59XHJcbi8qKlxyXG4gKiBpc1N1YlNldChzdXBlcnNldClcclxuICovXHJcbiBTZXQucHJvdG90eXBlLmlzU3ViU2V0ID0gZnVuY3Rpb24oc3VwZXJTZXQ6U2V0PGFueT4gKSA6Ym9vbGVhbiB7XHJcbiAgcmV0dXJuIFsuLi50aGlzXS5ldmVyeSh2YWwgPT4gc3VwZXJTZXQuaGFzKHZhbCkpO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIFVuaW9uXHJcbiAqL1xyXG5cclxuXHJcblNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbiguLi5zZXRzOlNldDxhbnk+W10gKSA6U2V0PGFueT4ge1xyXG4gIHJldHVybiBzZXRzLnJlZHVjZSgoYWNjOiBTZXQ8YW55Piwgc2V0OiBTZXQ8YW55PikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBTZXQoWy4uLmFjYywgLi4uc2V0XSk7XHJcbiAgfSwgdGhpcyk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJzZWN0aW9uXHJcbiAqL1xyXG5cclxuLy8gU2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiguLi5zZXRzOlNldDxhbnk+W10gKSA6Ym9vbGVhbiB7XHJcbi8vICAgY29uc3QgYXJyT2ZTZXRzID0gc2V0cy5jb25jYXQodGhpcylcclxuLy8gICAvLyAvLyBmaW5kIHRoZSBzbWFsbGVzdCBzZXRcclxuLy8gICAvLyBjb25zdCBzbWFsbGVzdFNldCA9IGFyck9mU2V0cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjLnNpemUgPCBjdXJyLnNpemUgPyBhY2MgOiBjdXJyLCB7IHNpemU6IEluZmluaXR5IH0pO1xyXG4vLyAgIGNvbnNvbGUubG9nKGFyck9mU2V0cyk7XHJcbi8vICAgLy8gY29uc3QgaW50ZXJzZWN0aW9uID0gWy4uLnNtYWxsZXN0U2V0XS5maWx0ZXJcclxuLy8gICByZXR1cm4gdHJ1ZTtcclxuLy8gfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBzeW1tZXRyaWNEaWZmZXJlbmNlXHJcbiAqL1xyXG5TZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2UgPSBmdW5jdGlvbiguLi5zZXRzOlNldDxhbnk+W10gKSA6U2V0PGFueT4ge1xyXG4gIHJldHVybiBzZXRzLnJlZHVjZSgoYWNjOlNldDxhbnk+LCBjdXJyOlNldDxhbnk+KSA6U2V0PGFueT4gPT4ge1xyXG4gICAgZm9yKGxldCBlbGVtIG9mIGN1cnIpe1xyXG4gICAgICBpZihhY2MuaGFzKGVsZW0pKXtcclxuICAgICAgICBhY2MuZGVsZXRlKGVsZW0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBhY2MuYWRkKGVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIHRoaXMpO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHNldERpZmZlcmVuY2VcclxuICovXHJcblNldC5wcm90b3R5cGUuc2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uKC4uLnNldHM6U2V0PGFueT5bXSApIDpTZXQ8YW55PiB7XHJcbiAgY29uc3QgdW5pb25PZlNldHMgPSBuZXcgU2V0KHNldHMucmVkdWNlKChhY2M6YW55W10sIGN1cnI6U2V0PGFueT4pID0+IGFjYy5jb25jYXQoWy4uLmN1cnJdKSwgW10pKTtcclxuICByZXR1cm4gbmV3IFNldChbLi4udGhpc10uZmlsdGVyKHZhbCA9PiAhdW5pb25PZlNldHMuaGFzKHZhbCkpKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHt9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIC8qKlxyXG4vLyAgKiBzZXR1dGlscyAxLjAuMFxyXG4vLyAgKiAoYykgSmF5IEd1cmF2IDIwMjFcclxuLy8gICovXHJcblxyXG5cclxuLy8gZGVjbGFyZSBnbG9iYWwge1xyXG4vLyAgIGludGVyZmFjZSBTZXQ8VD4ge1xyXG4vLyAgICAgdW5pb24oc2V0czpTZXQ8YW55PltdKTogU2V0PGFueT47XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBAcGFyYW0ge1NldDxhbnk+W119ICBzZXRzIC0gQSBhcnJheSBvZiBzZXRzXHJcbi8vICAqIFxyXG4vLyAgKiBAcmV0dXJuIHtTZXQ8YW55Pn0gUmV0dXJucyBhIHVuaW9uIG9mIGFsbCBzZXRzXHJcbi8vICAqL1xyXG4vLyBTZXQucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24oc2V0czpTZXQ8YW55PltdICkgOlNldDxhbnk+IHtcclxuLy8gICByZXR1cm4gc2V0cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYzogU2V0PGFueT4sIHNldDogU2V0PGFueT4pIHtcclxuLy8gICAgIHJldHVybiBuZXcgU2V0KFsuLi5hY2MsIC4uLnNldF0pO1xyXG4vLyAgIH0sIG5ldyBTZXQoWy4uLnRoaXNdKSk7XHJcbi8vIH1cclxuXHJcbi8vIC8vIGNvbnN0IHMgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyAvLyBjb25zdCB5ID0gcy51blxyXG4vLyAvLyBjb25zdCB5ID0gcy51bmlvbihbbmV3IFNldChbMyxcIjQzXCIsNV0pLCBuZXcgU2V0KFs3LDQxLDhdKV0pO1xyXG5cclxuLy8gLy8gY29uc29sZS5sb2coeSlcclxuLy8gZXhwb3J0IGRlZmF1bHQge31cclxuXHJcblxyXG5pbXBvcnQgXCIuL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3Qgc2V0MSA9IG5ldyBTZXQoWzEsIDIsIDMsIDQsIDksIDEwXSk7XHJcbmNvbnN0IHNldDIgPSBuZXcgU2V0KFszLCA0LCA1LCA2XSk7XHJcbmNvbnN0IHNldDMgPSBuZXcgU2V0KFs3LDgsOV0pO1xyXG5cclxuY29uc3QgeSA9IHNldDEuc2V0RGlmZmVyZW5jZShzZXQyLHNldDMpXHJcbmNvbnNvbGUubG9nKHkpOyJdLCJzb3VyY2VSb290IjoiIn0=