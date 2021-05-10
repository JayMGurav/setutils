/**
 * setutils 1.0.0
 * (c) Jay Gurav 2021
 */


 declare global {
  interface Set<T> {
    isSuperSet(subSet:Set<any>): boolean;
    isSubSet(superSet: Set<any>): boolean;
    union(...sets:Set<any>[]): Set<any>;
    intersection(...sets:Set<any>[]): boolean;
  }
}


/**
 * isSuperSet
 */
 Set.prototype.isSuperSet = function(subSet:Set<any> ) :boolean {
  return [...subSet].every(val => this.has(val));
}
/**
 * isSubSet(superset)
 */
 Set.prototype.isSubSet = function(superSet:Set<any> ) :boolean {
  return [...this].every(val => superSet.has(val));
}

/**
 * 
 * Union
 */
Set.prototype.union = function(...sets:Set<any>[] ) :Set<any> {
  return sets.reduce(function (acc: Set<any>, set: Set<any>) {
    return new Set([...acc, ...set]);
  }, new Set([...this]));
}


/**
 * Intersection
 */

// Set.prototype.intersection = function(...sets:Set<any>[] ) :boolean {
//   // const arrOfSets = sets.concat(this).map(set => [...set]);
//   // console.log(arrOfSets);
//   return true;
// }





export default {}