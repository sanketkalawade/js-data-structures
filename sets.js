//Although now in ES6 we have Set but i would like to implement it.
function Set(){
    this.size = 0;
    this.set = {};
}

Set.prototype.add = function(data) {
    if (!this.set.hasOwnProperty(data)) {
        this.set[data] = "true"; //we can set any value so here key is data/value we passed to add in set and value of key is true.
        this.size++;
    } else {
        throw new Error('This item already exist in set');

    }
}

Set.prototype.remove = function(data) {
    if (this.set.hasOwnProperty(data)) {
      delete this.set[data];
      this.size--;
    } else {
        throw new Error('This item does not exist or already removed from set');
    }
  }

  Set.prototype.print = function() { 
    console.log("Set: ", Object.keys(this.set));
  }

  Set.prototype.union = function(secondset) {
    const unionset = new Set();
    for (const key in this.set) {
      if (this.set.hasOwnProperty(key)) {
        unionset.add(key);
      }
    }
    for (const key in secondset.set) {
      if (!unionset.set.hasOwnProperty(key)) {
        unionset.add(key);
      }
    }
    return unionset;
  }

  Set.prototype.intersect = function(secondset) {
    const inter = new Set();
    for (const key in this.set) {
      if (secondset.set.hasOwnProperty(key)) {
        inter.add(key);
      }
    }
    return inter;
  }
 /*
  * Set A - SET B = SET A values But excluding set B values; 
  * SET A = [1,3]; SET B = [2,3]; diff set = [1];
 */
  Set.prototype.difference = function(secondset) {
   const diff = new Set();
   for(const key in this.set){
      if (!secondset.set.hasOwnProperty(key)) {
          diff.add(key)
      }
   }
   return diff;
  }

const firstSet = new Set();
firstSet.add(1);
firstSet.add(2);
firstSet.add(3);
firstSet.print();
console.log('removing 2');
firstSet.remove(2);
firstSet.print();
console.log("firstSet: ", firstSet);
const secondSet = new Set();
secondSet.add(2);
secondSet.add(3);
secondSet.print();
console.log("secondSet: ", secondSet);

console.log('union: ', firstSet.union(secondSet));
console.log('intersection: ', firstSet.intersect(secondSet));
console.log('diff: ', firstSet.difference(secondSet));


