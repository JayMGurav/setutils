// /**
//  * setutils 1.0.0
//  * (c) Jay Gurav 2021
//  */


// declare global {
//   interface Set<T> {
//     union(sets:Set<any>[]): Set<any>;
//   }
// }



// /**
//  * @param {Set<any>[]}  sets - A array of sets
//  * 
//  * @return {Set<any>} Returns a union of all sets
//  */
// Set.prototype.union = function(sets:Set<any>[] ) :Set<any> {
//   return sets.reduce(function (acc: Set<any>, set: Set<any>) {
//     return new Set([...acc, ...set]);
//   }, new Set([...this]));
// }

// // const s = new Set();

// // const y = s.un
// // const y = s.union([new Set([3,"43",5]), new Set([7,41,8])]);

// // console.log(y)
// export default {}


import "./utilities";

const set1 = new Set([1, 2, 3, 4, 9, 10]);
const set2 = new Set([3, 4, 5, 6]);
const set3 = new Set([7,8,9]);

const y = set1.setDifference(set2,set3)
console.log(y);