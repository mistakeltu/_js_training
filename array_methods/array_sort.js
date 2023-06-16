// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// To sort the elements in an array without mutating the original array, use toSorted().

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

//   For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.prototype.localeCompare(). This function can compare those characters so they appear in the right order.

const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10

// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);

// Since version 10 (or ECMAScript 2019), the specification dictates that Array.prototype.sort is stable.

// For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:

const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
// Copy to Clipboard
// After sorting this array by grade in ascending order:

// students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
// Copy to Clipboard
// The students variable will then have the following value:

[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];

const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);

console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]