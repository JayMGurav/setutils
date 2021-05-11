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
 * checks if a set is a superset of input set
 * 
 * @param set - input set
 * @returns boolean 
 */
 Set.prototype.isSuperSet = function(set:Set<any> ) :boolean {
  return [...set].every(val => this.has(val));
}


/**
 * checks if the passed set is subset 
 * 
 * @param set - Input set
 * @returns boolean
 */
 Set.prototype.isSubSet = function(set:Set<any> ) :boolean {
  return [...this].every(val => set.has(val));
}

/**
 * 
 * Returns the union of passed sets
 * 
 * @param ...sets 
 * @returns union set of all the passed sets
 */
Set.prototype.union = function(...sets:Set<any>[] ) :Set<any> {
  return sets.reduce((acc: Set<any>, set: Set<any>) => {
    return new Set([...acc, ...set]);
  }, this);
}


/**
 * Returns the intersection of all the sets
 * 
 * @param ...sets
 * @returns Intersection of all the sets
 */
Set.prototype.intersection = function(...sets:Set<any>[] ) :Set<any> {
  const arrOfSets = sets.concat(this)
  const smallestSet = arrOfSets.reduce((acc, curr) => acc.size < curr.size ? acc : curr, this);
  return new Set([...smallestSet].filter(val => arrOfSets.every((set) => set.has(val))));
}


/**
 * returns symetric difference with all the input sets
 * 
 * @param ...sets
 * @returns symmetric difference of all the sets
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
 * returns set difference with all the input sets
 * 
 * @param ...sets
 * @returns set difference of all the sets
 */
Set.prototype.setDifference = function(...sets:Set<any>[] ) :Set<any> {
  const unionOfSets = new Set(sets.reduce((acc:any[], curr:Set<any>) => acc.concat([...curr]), []));
  return new Set([...this].filter(val => !unionOfSets.has(val)));
}



/**
 * returns the cartesian product with the input set
 * @param set - input
 * @returns cartesian product
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