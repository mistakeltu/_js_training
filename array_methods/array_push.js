// The push() method adds the specified elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
  Array.prototype.push.call(arrayLike, 1, 2);
  console.log(arrayLike);
  // { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }
  
  const plainObj = {};
  // There's no length property, so the length is 0
  Array.prototype.push.call(plainObj, 1, 2);
  console.log(plainObj);
  // { '0': 1, '1': 2, length: 2 }

// Using an object in an array-like fashion
// As mentioned above, push is intentionally generic, and we can use that to our advantage. Array.prototype.push can work on an object just fine, as this example shows.

// Note that we don't create an array to store a collection of objects. Instead, we store the collection on the object itself and use call on Array.prototype.push to trick the method into thinking we are dealing with an array—and it just works, thanks to the way JavaScript allows us to establish the execution context in any way we want.

const obj = {
  length: 0,

  addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2

// Copy to Clipboard
// Note that although obj is not an array, the method push successfully incremented obj's length property just like if we were dealing with an actual array.