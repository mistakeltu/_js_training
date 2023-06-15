// The forEach() method executes a provided function once for each array element.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(`Number ${number} is at index ${index} in the array:`, array);
});

// Number 1 is at index 0 in the array: [1, 2, 3, 4, 5]
// Number 2 is at index 1 in the array: [1, 2, 3, 4, 5]
// Number 3 is at index 2 in the array: [1, 2, 3, 4, 5]
// Number 4 is at index 3 in the array: [1, 2, 3, 4, 5]
// Number 5 is at index 4 in the array: [1, 2, 3, 4, 5]

// Converting a for loop to forEach
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});