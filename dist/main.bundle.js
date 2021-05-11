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
Set.prototype.intersection = function (...sets) {
    const arrOfSets = sets.concat(this);
    const smallestSet = arrOfSets.reduce((acc, curr) => acc.size < curr.size ? acc : curr, this);
    return new Set([...smallestSet].filter(val => arrOfSets.every((set) => set.has(val))));
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
Set.prototype.cartesianProduct = function (set) {
    return new Set([...this].reduce((acc, val) => {
        let arr = [];
        for (let elem of set) {
            arr.push([val, elem]);
        }
        return acc.concat(arr);
    }, []));
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
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const set3 = new Set([5, 6, 3, 4]);
const y = set1.intersection(set2, set3);
console.log(y);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1dGlscy8uL3NyYy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vc2V0dXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXRpbHMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBc0JDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVMsTUFBZTtJQUNsRCxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUlBLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsUUFBaUI7SUFDbEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFRRCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFTLEdBQUcsSUFBZTtJQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFhLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDbEQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBT0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBUyxHQUFHLElBQWU7SUFDdEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbkMsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFD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SSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogc2V0dXRpbHMgMS4wLjBcclxuICogKGMpIEpheSBHdXJhdiAyMDIxXHJcbiAqL1xyXG5cclxuXHJcbiBkZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFNldDxUPiB7XHJcbiAgICBpc1N1cGVyU2V0KHN1YlNldDpTZXQ8YW55Pik6IGJvb2xlYW47XHJcbiAgICBpc1N1YlNldChzdXBlclNldDogU2V0PGFueT4pOiBib29sZWFuO1xyXG4gICAgY2FydGVzaWFuUHJvZHVjdChzZXQ6IFNldDxhbnk+KTogU2V0PGFueT47XHJcbiAgICB1bmlvbiguLi5zZXRzOlNldDxhbnk+W10pOiBTZXQ8YW55PjtcclxuICAgIGludGVyc2VjdGlvbiguLi5zZXRzOlNldDxhbnk+W10pOiBTZXQ8YW55PjtcclxuICAgIHN5bW1ldHJpY0RpZmZlcmVuY2UoLi4uc2V0czpTZXQ8YW55PltdKTogU2V0PGFueT47XHJcbiAgICBzZXREaWZmZXJlbmNlKC4uLnNldHM6U2V0PGFueT5bXSk6IFNldDxhbnk+O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBpc1N1cGVyU2V0XHJcbiAqL1xyXG4gU2V0LnByb3RvdHlwZS5pc1N1cGVyU2V0ID0gZnVuY3Rpb24oc3ViU2V0OlNldDxhbnk+ICkgOmJvb2xlYW4ge1xyXG4gIHJldHVybiBbLi4uc3ViU2V0XS5ldmVyeSh2YWwgPT4gdGhpcy5oYXModmFsKSk7XHJcbn1cclxuLyoqXHJcbiAqIGlzU3ViU2V0KHN1cGVyc2V0KVxyXG4gKi9cclxuIFNldC5wcm90b3R5cGUuaXNTdWJTZXQgPSBmdW5jdGlvbihzdXBlclNldDpTZXQ8YW55PiApIDpib29sZWFuIHtcclxuICByZXR1cm4gWy4uLnRoaXNdLmV2ZXJ5KHZhbCA9PiBzdXBlclNldC5oYXModmFsKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogVW5pb25cclxuICovXHJcblxyXG5cclxuU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uKC4uLnNldHM6U2V0PGFueT5bXSApIDpTZXQ8YW55PiB7XHJcbiAgcmV0dXJuIHNldHMucmVkdWNlKChhY2M6IFNldDxhbnk+LCBzZXQ6IFNldDxhbnk+KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFNldChbLi4uYWNjLCAuLi5zZXRdKTtcclxuICB9LCB0aGlzKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcnNlY3Rpb25cclxuICovXHJcblxyXG5TZXQucHJvdG90eXBlLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKC4uLnNldHM6U2V0PGFueT5bXSApIDpTZXQ8YW55PiB7XHJcbiAgY29uc3QgYXJyT2ZTZXRzID0gc2V0cy5jb25jYXQodGhpcylcclxuICBjb25zdCBzbWFsbGVzdFNldCA9IGFyck9mU2V0cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjLnNpemUgPCBjdXJyLnNpemUgPyBhY2MgOiBjdXJyLCB0aGlzKTtcclxuICByZXR1cm4gbmV3IFNldChbLi4uc21hbGxlc3RTZXRdLmZpbHRlcih2YWwgPT4gYXJyT2ZTZXRzLmV2ZXJ5KChzZXQpID0+IHNldC5oYXModmFsKSkpKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBzeW1tZXRyaWNEaWZmZXJlbmNlXHJcbiAqL1xyXG5TZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2UgPSBmdW5jdGlvbiguLi5zZXRzOlNldDxhbnk+W10gKSA6U2V0PGFueT4ge1xyXG4gIHJldHVybiBzZXRzLnJlZHVjZSgoYWNjOlNldDxhbnk+LCBjdXJyOlNldDxhbnk+KSA6U2V0PGFueT4gPT4ge1xyXG4gICAgZm9yKGxldCBlbGVtIG9mIGN1cnIpe1xyXG4gICAgICBpZihhY2MuaGFzKGVsZW0pKXtcclxuICAgICAgICBhY2MuZGVsZXRlKGVsZW0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBhY2MuYWRkKGVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIHRoaXMpO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHNldERpZmZlcmVuY2VcclxuICovXHJcblNldC5wcm90b3R5cGUuc2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uKC4uLnNldHM6U2V0PGFueT5bXSApIDpTZXQ8YW55PiB7XHJcbiAgY29uc3QgdW5pb25PZlNldHMgPSBuZXcgU2V0KHNldHMucmVkdWNlKChhY2M6YW55W10sIGN1cnI6U2V0PGFueT4pID0+IGFjYy5jb25jYXQoWy4uLmN1cnJdKSwgW10pKTtcclxuICByZXR1cm4gbmV3IFNldChbLi4udGhpc10uZmlsdGVyKHZhbCA9PiAhdW5pb25PZlNldHMuaGFzKHZhbCkpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogY2FydGVzaWFuUHJvZHVjdFxyXG4gKi9cclxuU2V0LnByb3RvdHlwZS5jYXJ0ZXNpYW5Qcm9kdWN0ID0gZnVuY3Rpb24oc2V0OlNldDxhbnk+KSA6U2V0PGFueT4ge1xyXG4gIHJldHVybiBuZXcgU2V0KFsuLi50aGlzXS5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICBsZXQgYXJyOmFueVtdID0gW107XHJcbiAgICBmb3IobGV0IGVsZW0gb2Ygc2V0KXtcclxuICAgICBhcnIucHVzaChbdmFsLCBlbGVtXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjLmNvbmNhdChhcnIpO1xyXG4gIH0sIFtdKSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHt9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIC8qKlxyXG4vLyAgKiBzZXR1dGlscyAxLjAuMFxyXG4vLyAgKiAoYykgSmF5IEd1cmF2IDIwMjFcclxuLy8gICovXHJcblxyXG5cclxuLy8gZGVjbGFyZSBnbG9iYWwge1xyXG4vLyAgIGludGVyZmFjZSBTZXQ8VD4ge1xyXG4vLyAgICAgdW5pb24oc2V0czpTZXQ8YW55PltdKTogU2V0PGFueT47XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBAcGFyYW0ge1NldDxhbnk+W119ICBzZXRzIC0gQSBhcnJheSBvZiBzZXRzXHJcbi8vICAqIFxyXG4vLyAgKiBAcmV0dXJuIHtTZXQ8YW55Pn0gUmV0dXJucyBhIHVuaW9uIG9mIGFsbCBzZXRzXHJcbi8vICAqL1xyXG4vLyBTZXQucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24oc2V0czpTZXQ8YW55PltdICkgOlNldDxhbnk+IHtcclxuLy8gICByZXR1cm4gc2V0cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYzogU2V0PGFueT4sIHNldDogU2V0PGFueT4pIHtcclxuLy8gICAgIHJldHVybiBuZXcgU2V0KFsuLi5hY2MsIC4uLnNldF0pO1xyXG4vLyAgIH0sIG5ldyBTZXQoWy4uLnRoaXNdKSk7XHJcbi8vIH1cclxuXHJcbi8vIC8vIGNvbnN0IHMgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyAvLyBjb25zdCB5ID0gcy51blxyXG4vLyAvLyBjb25zdCB5ID0gcy51bmlvbihbbmV3IFNldChbMyxcIjQzXCIsNV0pLCBuZXcgU2V0KFs3LDQxLDhdKV0pO1xyXG5cclxuLy8gLy8gY29uc29sZS5sb2coeSlcclxuLy8gZXhwb3J0IGRlZmF1bHQge31cclxuXHJcblxyXG5pbXBvcnQgXCIuL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3Qgc2V0MSA9IG5ldyBTZXQoWzEsIDIsIDMsIDRdKTtcclxuY29uc3Qgc2V0MiA9IG5ldyBTZXQoWzMsIDQsIDUsIDZdKTtcclxuY29uc3Qgc2V0MyA9IG5ldyBTZXQoWyA1LCA2LCAzLCA0XSk7XHJcbi8vIGNvbnN0IHNldDMgPSBuZXcgU2V0KFs3LDgsOV0pO1xyXG5cclxuY29uc3QgeSA9IHNldDEuaW50ZXJzZWN0aW9uKHNldDIsIHNldDMpXHJcbmNvbnNvbGUubG9nKHkpOyJdLCJzb3VyY2VSb290IjoiIn0=