// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// Using map to reformat objects in an array
// The following code takes an array of objects and creates a new array containing the newly reformatted objects.

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
  // [ 4, 9, 16 ]

  console.log(
    [1, , 3].map((x, index) => {
      console.log(`Visit ${index}`);
      return x * 2;
    }),
  );
  // Visit 0
  // Visit 2
  // [2, empty, 6]

  
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]