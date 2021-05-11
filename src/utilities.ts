/**
 * setutils 1.0.0
 * (c) Jay Gurav 2021
 */


 declare global {
  interface Set<T> {
    isSuperSet(subSet:Set<any>): boolean;
    isSubSet(superSet: Set<any>): boolean;
    cartesianProduct(set: Set<any>): Set<any>;
    union(...sets:Set<any>[]): Set<any>;
    intersection(...sets:Set<any>[]): Set<any>;
    symmetricDifference(...sets:Set<any>[]): Set<any>;
    setDifference(...sets:Set<any>[]): Set<any>;
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
  return sets.reduce((acc: Set<any>, set: Set<any>) => {
    return new Set([...acc, ...set]);
  }, this);
}


/**
 * Intersection
 */

Set.prototype.intersection = function(...sets:Set<any>[] ) :Set<any> {
  const arrOfSets = sets.concat(this)
  const smallestSet = arrOfSets.reduce((acc, curr) => acc.size < curr.size ? acc : curr, this);
  return new Set([...smallestSet].filter(val => arrOfSets.every((set) => set.has(val))));
}


/**
 * symmetricDifference
 */
Set.prototype.symmetricDifference = function(...sets:Set<any>[] ) :Set<any> {
  return sets.reduce((acc:Set<any>, curr:Set<any>) :Set<any> => {
    for(let elem of curr){
      if(acc.has(elem)){
        acc.delete(elem);
      }else{
        acc.add(elem);
      }
    }
    return acc;
  }, this);
}


/**
 * setDifference
 */
Set.prototype.setDifference = function(...sets:Set<any>[] ) :Set<any> {
  const unionOfSets = new Set(sets.reduce((acc:any[], curr:Set<any>) => acc.concat([...curr]), []));
  return new Set([...this].filter(val => !unionOfSets.has(val)));
}



/**
 * cartesianProduct
 */
Set.prototype.cartesianProduct = function(set:Set<any>) :Set<any> {
  return new Set([...this].reduce((acc, val) => {
    let arr:any[] = [];
    for(let elem of set){
     arr.push([val, elem]);
    }
    return acc.concat(arr);
  }, []))
}





export default {}