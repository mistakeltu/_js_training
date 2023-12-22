console.clear();

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  let sum = 0;
  if (typeof x === "number") {
    sum = x * 50 + 6;
  } else {
    return "Error";
  }
  return sum;
}

console.log(problem(4));

console.log("---------------------------");

const arejus = [100, 200, 10, 40, 50];

function check(a, x) {
  for (const element of a) {
    if (element === x) {
      return true;
    }
  }
  return false;
}

console.log(check(arejus, 40));
// console.log(check(arejus, 40));

console.log("------------------------------");

const x = [1, 2, 3, 4, 5];

const y = x.filter((m) => m >= 2);

console.log(y);

console.log("----------------------------");

const numberArray = [40, 1, 5, 200];

function compareNumbers(a, b) {
  console.log(a - b);
  return a - b;
}

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
console.log(numberArray.sort((a, b) => a - b)); // [1, 5, 40, 200]

console.log("-------------------------------------------[");

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

// console.log(user);

// console.log("----------------------------------");

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = "What do you want to know about the user?";

// // access by variable
// // console.log(user["key"]); // John (if enter "name")

// console.log("----------------------------------");

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     } else if (arr.length === 0) {
//       sum = 0;
//     }
//   }
//   return sum;
// }

// console.log(positiveSum([1]));

// function arrayMadness(a, b) {
//   let sum1 = 0;
//   let sum2 = 0;
//   a.map((x) => (sum1 += x ** 2));
//   b.map((y) => (sum2 += y ** 3));

//   if (sum1 > sum2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(arrayMadness([5, 6, 7], [4, 5, 6]));

// function xor(a, b) {
//   if (a === false && b === true) {
//     return true;
//   } else if (a === true && b === false) {
//     return true;
//   } else if (a === false && b === false) {
//     return false;
//   } else if (a === true && b === true) {
//     return true;
//   }
// }

// console.log(xor(true, false));

// function checkAlive(health) {
//   return health > 0;
// }

// console.log(checkAlive(5));

// function multipleOfIndex(array) {
//   let newArray = [];
//   array.forEach((number, index) => {
//     number % index === 0 || number === 0 ? newArray.push(number) : 0;
//   });
//   return newArray;
// }

// console.log(multipleOfIndex([0, 2, 3, 6, 9]));

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.substring(1);
// }

// console.log(capitalizeWord("karolis"));

// function contamination(text, char) {
//   let naujas = "";
//   if (text.length === 0 || char.length === 0) {
//     return "";
//   } else {
//     naujas = char.repeat(text.length);
//   }
//   return naujas;
// }

// console.log(contamination("abc", "z"));

// function position(letter) {
//   const alphabet = "abcdefghiklmnopqrstvxy";

//   // if (index === -1) {
//   // }

//   const index = alphabet.[length - 1].indexOf(letter);
//   return index;
// }

// console.log(position("k"));

// function findNeedle(haystack) {
//   const ieskomas = "needle";
//   const index = haystack.findIndex((element) => element === ieskomas);

//   if (index !== -1) {
//     console.log(`Found the ${ieskomas} at position ${index}`);
//   } else {
//     console.log(`Your function didn't return anything`);
//   }
// }

// console.log(
//   findNeedle(["3", "123124234", "world", "hay", 2, "3", true, false])
// );

// function solution(a, b) {
//   let string = ``;
//   return a.length > b.length
//     ? (string = `${b}${a}${b}`)
//     : (string = `${a}${b}${a}`);
// }

// console.log(solution("Soon", "Me"));

// function pickIt(arr) {
//   let odd = [];
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
//   }
//   return [odd, even];
// }

// console.log(pickIt([1, 2]));

// function alienLanguage(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     // words[i] = words[i].slice(0, -1);
//     words[i] = words[i].toLowerCase();
//     words[i] =
//       words[i].toUpperCase().slice(0, -1) + words[i][words[i].length - 1];
//   }
//   return words.join(" ");
// }

// console.log(alienLanguage("HELLO WORLD"));

// function wrap(value) {
//   let obj = { value: value };
//   return obj;
// }

// console.log(wrap("karolis_karolina"));

// function mystery() {
//   const results = {
//     sanity: "Hello",
//   };
//   // return results;
// }

// console.log(mystery());

// function sc(floor) {
//   const scream = "Aa~ ";
//   if (floor <= 1) {
//     return ``;
//   }

//   if (floor > 6) {
//     return `${scream.repeat(floor - 1)}Pa!`;
//   } else if (floor <= 6) {
//     return `${scream.repeat(floor - 1)}Pa! Aa!`;
//   }
// }

// console.log(sc(-1));

// const flip = (d, a) => {
//   if (d === "R") {
//     a.sort((x, y) => x - y);
//   } else if (d === "L") {
//     a.sort((x, y) => y - x);
//   }
//   return a;
// };

// console.log(flip("L", [3, 2, 1, 2]));

// function grow(x) {
//   let sum = 1;
//   x.map((n) => (sum *= n));
//   return sum;
// }

// console.log(grow([1, 2, 3]));

// function quadratic(x1, x2) {
//   let lygtis = 0;
//   const a = 1;
//   if (a === 1) {
//     // lygtis = (x - x1) * (x - x2);
//     lygtis = x^2 - 3 * x + 2;
//   }
//   return lygtis;
// }

// console.log(quadratic(0, 1));

// function getAverage(marks) {
//   let sum = 0;
//   marks.map((a) => (sum += a));
//   sum = sum / marks.length;
//   return sum;
// }

// console.log(getAverage([1, 5, 87, 45, 8, 8]));

// function isPangram(string) {
//   const alpha = /^[a-zA-Z]*$/;
//   let uni = new Set();

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i].toLowerCase();
//     if (alpha.test(char)) {
//       uni.add(char);
//     }
//   }
//   return uni.size === 26;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// function derive(coefficient, exponent) {
//   let sum = 0;
//   sum = coefficient * exponent;
//   return `${sum}x^${exponent - 1}`;
// }

// function integrate(coefficient, exponent) {
//   let newE = exponent + 1;
//   return `${coefficient / newE}x^${newE}`;
// }

// console.log(integrate(3, 2));

// function quadrant(x, y) {
//   if (x > 0 && y > 0) {
//     return 1;
//   } else if (x < 0 && y > 0) {
//     return 2;
//   } else if (x < 0 && y < 0) {
//     return 3;
//   } else if (x > 0 && y < 0) {
//     return 4;
//   }
// }

// console.log(quadrant(1, 2));

// function updateLight(current) {
//   if (current === "green") {
//     return "yellow";
//   } else if (current === "red") {
//     return "green";
//   } else if (current === "yellow") {
//     return "red";
//   }
// }

// function seatsInTheater(nCols, nRows, col, row) {
//   return (nCols - (col - 1)) * (nRows - row);
// }

// console.log(seatsInTheater());

// function peopleWithAgeDrink(old) {
//   if (old <= 14) {
//     return "drink toddy";
//   } else if (14 < old && old < 18) {
//     return "drink coke";
//   } else if (18 <= old && old < 21) {
//     return "drink beer";
//   } else if (old >= 21) {
//     return "drink whisky";
//   }
// }

// console.log(peopleWithAgeDrink(15));

// function pillars(numPill, dist, width) {
//   if (numPill === 1) {
//     return 0;
//   } else {
//     return (numPill - 1) * (dist * 100) + (numPill - 2) * width;
//   }
// }

// console.log(pillars(1, 10, 10));

// function cutIt(arr) {
//   let stringas = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].length);
//     if (arr[i].length < stringas.length) {
//       stringas = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].slice(0, stringas.length);
//   }
//   return arr;
// }

// console.log(cutIt(["a", "cdeaaaaaaaaaaaa", "fghaaa"]));

// function cookie(x) {
//   if (typeof x === "string") {
//     return "Who ate the last cookie? It was Zach!";
//   } else if (typeof x === "number") {
//     return "Who ate the last cookie? It was Monica!";
//   } else {
//     return "Who ate the last cookie? It was the dog!";
//   }
// }

// function myFirstKata(a, b) {
//   let sum = 0;
//   if (typeof a !== "number" || typeof b !== "number") {
//     return false;
//   } else {
//     sum = (a % b) + (b % a);
//   }
//   return sum;
// }

// console.log(myFirstKata(NaN, 5));

// let items = [];
// const obj = {
//   a: "b",
//   c: "d",
// };
// items.push(obj);

// console.log(items);

// let name = "Abe";
// var greet_abe = function () {
//   return "Hello, " + name + "!";
// };
// var greet_ben = function () {
//   name = "Ben";
//   return "Hello, " + name + "!";
// };

// console.log(greet_ben());

// function getMax1() {
//   var max = {
//     name: "Max Headroom",
//   };
//   return max;
// }

// function getMax2() {
//   return { name: "Max Headroom" };
// }

// console.log(getMax1());
// console.log(getMax2());

// function weatherInfo(temp) {
//   var c = convertToCelsius(temp);
//   if (c < 0) return c + " is freezing temperature";
//   else return c + " is above freezing temperature";
// }

// function convertToCelsius(temperature) {
//   var celsius = (temperature - 32) * (5 / 9);
//   return celsius;
// }

// console.log(weatherInfo(50));

// function giveMeFive(obj) {
//   let newArr = [];
//   for (let value in obj) {
//     if (obj[value].length === 5) {
//       newArr.push(obj[value]);
//     }
//   }
//   for (let key in obj) {
//     if (key.length === 5) {
//       newArr.push(key);
//     }
//   }
//   return newArr;
// }

// console.log(
//   giveMeFive({
//     eibeniw: "bgqibf",
//     kuv: "vewsd",
//     pyu: "jm",
//     lm: "lmhirp",
//     ncg: "ecvsg",
//     nqzp: "kqhls",
//     jvbun: "frizy",
//     fkgmk: "nzvufm",
//     pyfyco: "yy",
//     agoxjx: "nisjpma",
//     pvysq: "tnddt",
//   })
// );

// function padIt(str, n) {
//   let num = 0;
//   let string = "";
//   while (num < n) {
//     if (num % 2 === 0) {
//       str = `*${str}`;
//     } else {
//       str = `${str}*`;
//     }
//     num++;
//   }
//   return str;
// }

// console.log(padIt("a", 5));

// function sixToast(num) {
//   // const toaster = 6;
//   if (num > 6) {
//     return num - 6;
//   } else {
//     return 6 - num;
//   }
// }

// console.log(sixToast(17));

// function howManydays(month) {
//   let days;
//   switch (month) {
//     case 1:
//       days = 31;
//       break;
//     case 2:
//       days = 28;
//       break;
//     case 3:
//       days = 31;
//       break;
//     case 4:
//       days = 30;
//       break;
//     case 5:
//       days = 31;
//       break;
//     case 6:
//       days = 30;
//       break;
//     case 7:
//       days = 31;
//       break;
//     case 8:
//       days = 31;
//       break;
//     case 9:
//       days = 30;
//       break;
//     case 10:
//       days = 31;
//       break;
//     case 11:
//       days = 30;
//       break;
//     case 12:
//       days = 31;
//       break;
//   }
//   return days;
// }
// console.log(howManydays(2));

// function _if(bool, func1, func2) {
//   if (bool === true || typeof bool === "boolean") {
//     return func1();
//   } else {
//     return func2();
//   }
// }

// function t() {
//   console.log("True");
// }

// function f() {
//   console.log("False");
// }

// console.log(_if("dasdas", t, f));

// function order(words) {
//   let order = words.split(" ");
//   let newOrder = [];
//   order
//     .map((w) => w.match(/[1-9]/))
//     .filter((id, idx, arr) => {
//       console.log(newOrder.push(arr[idx][0]));
//       newOrder.sort((a, b) => a - b);

//       // arr[idx][0].sort((a, b) => a - b);
//       console.log(newOrder[id]);
//       // if (arr[idx][0] < newOrder.length) {
//       //   newOrder = newOrder.push(id);
//       // }
//     });
//   return newOrder;
// }

// console.log(order("is2 Thi1s T4est 3a"));

// function order(words) {
//   let order = words.split(" ");
//   let newOrder = [];

//   order
//     .map((w) => ({ word: w, num: parseInt(w.match(/\d/)[0]) }))
//     .sort((a, b) => a.num - b.num)
//     .forEach((item) => newOrder.push(item.word));

//   return newOrder.join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a"));

// function firstToLast(str, c) {
//   return str.lastIndexOf(c) - str.indexOf(c);
// }
// console.log(firstToLast("karolina", "d"));

// function reverseList(list) {
//   return list.reverse();
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log("Hello");
// };

// user.sayHi(); // Hello!

// console.log(delete user.sayHi);
// console.log(user);

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name);

// function chromosomeCheck(sperm) {
//   return sperm.split(" ").includes("XY")
//     ? `Congratulations! You're going to have a son.`
//     : `Congratulations! You're going to have a daughter.`;
// }

// console.log(chromosomeCheck("XX"));

// function ifChuckSaysSo() {
//   return 1 > 2;
// }

// console.log(ifChuckSaysSo());

// function grabDoll(dolls) {
//   let bag = [];
//   for (let i = 0; i < dolls.length; i++) {
//     if (bag.length === 3) {
//       break;
//     }
//     if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//       bag.push(dolls[i]);
//       continue;
//     }
//   }
//   return bag;
// }

// console.log(
//   grabDoll([
//     "Mickey Mouse",
//     "Barbie doll",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Snow white",
//   ])
// );

// function whatNumberIsIt(n) {
//   if (n === Number.POSITIVE_INFINITY) {
//     return `Input number is Number.POSITIVE_INFINITY`;
//   } else if (n === Number.NEGATIVE_INFINITY) {
//     return `Input number is Number.NEGATIVE_INFINITY`;
//   } else if (isNaN(n)) {
//     return `Input number is Number.${Number.NaN}`;
//   } else if (n === Number.MIN_VALUE) {
//     return `Input number is Number.MIN_VALUE`;
//   } else if (n === Number.MAX_VALUE) {
//     return `Input number is Number.MAX_VALUE`;
//   } else {
//     return `Input number is ${n}`;
//   }
// }

// console.log(whatNumberIsIt(NaN));

// function howManySmaller(arr, n) {
//   let count = 0;
//   arr.map((num) => (num.toFixed(2) < n ? count++ : 0));
//   return count;
// }

// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));

// function fiveLine(s) {
//   let stringas = s.trim();
//   const pattern = `${stringas}\n${stringas + stringas}\n${
//     stringas + stringas + stringas
//   }\n${stringas + stringas + stringas + stringas}\n${
//     stringas + stringas + stringas + stringas + stringas
//   }`;
//   return pattern;
// }

// console.log(fiveLine("a             "));

// function blackAndWhite(arr) {
//   if (Array.isArray(arr)) {
//     if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
//       return `It's a black array`;
//     } else {
//       return `It's a white array`;
//     }
//   } else {
//     return `It's a fake array`;
//   }
// }

// console.log(blackAndWhite([17, 7, 18, 4, 5, 13, 0]));

// function whatday(num) {
//   let day;
//   switch (num) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//       day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//       break;
//     default:
//       return `Wrong, please enter a number between 1 and 7`;
//   }
//   return day;
// }

// console.log(whatday(8));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

//------------------------------------------------------------------
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function shortToLong(arr) {
//   const newArr = arr.sort((a, b) => a.length - b.length);
//   return newArr;
// }

// console.log(shortToLong(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// function createPhoneNumber(numbers) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(i);
//     if (i < 3) {
//       arr1.push(numbers[i]);
//     } else if (i >= 3 && i < 6) {
//       arr2.push(numbers[i]);
//     } else if (i >= 6 && i < 10) {
//       arr3.push(numbers[i]);
//     }
//   }
//   return `(${arr1.join("")}) ${arr2.join("")}-${arr3.join("")}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }

//-------------------------------------------------------------------------

// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false;
//   } else {
//     for (let i = 1; i < walk.length; i++) {
//       if (i % 2 !== 0) {
//         // console.log(walk[i], i);
//         if (walk.indexOf(walk)) {
//           console.log(walk[i]);
//           return true;
//         } else {
//           return false;
//         }
//       }
//       if (i % 2 === 0) {
//         if (walk.indexOf(walk)) {
//           return true;
//         } else {
//           false;
//         }
//       }
//     }
//   }
//   return true;
// }

// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false;
//   } else {
//     for (let i = 1; i < walk.length; i++) {
//       if (i % 2 !== 0) {
//         if (walk[i] !== walk[0]) {
//           return false;
//         }
//       } else {
//         if (walk[i] !== walk[1]) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false;
//   } else {
//     let x = 0;
//     let y = 0;

//     for (let i = 0; i < walk.length; i++) {
//       // Update coordinates for even indices
//       switch (walk[i]) {
//         case "n":
//           y++;
//           break;
//         case "s":
//           y--;
//           break;
//         case "e":
//           x++;
//           break;
//         case "w":
//           x--;
//           break;
//         default:
//           // Invalid direction
//           return false;
//       }
//     }

//     // Check if the final position is back to the starting point
//     return x === 0 && y === 0 ? true : false;
//   }
// }

// console.log(isValidWalk(["n", "n", "n", "s", "s", "s", "n", "s", "n", "s"]));

///////////////////////////////////////////////////////////////////////////
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   let newArr = [];
//   array.map((num) => {
//     if (num % 2 !== 0) {
//       newArr.push(num);
//       newArr.sort((a, b) => a - b);
//     }
//   });
//   let result = array.map((num) => {
//     return num % 2 !== 0 ? newArr.shift() : num;
//   });
//   return result;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

//////////////////////////////////////////////////////////////////

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   let sum = 0;
//   if (number < 0) {
//     return 0;
//   } else {
//     for (let i = 0; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//         sum -= i;
//       }
//     }
//   }
//   return sum;
// }

// console.log(solution(20));

// function getCount(str) {
//   let nString = "";
//   let count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   nString = str.toLowerCase().trim();
//   for (let i = 0; i < nString.length; i++) {
//     for (let m = 0; m < vowels.length; m++) {
//       if (nString[i] === vowels[m]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(getCount("       KaroLis        "));

////////////////////////////////////////////////////////////////////////////

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

function spinWords(string) {
  let words = string.split(" ");
  let naujas = "";
  let rev = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      naujas += `${words[i]} `;
    }
    // naujas = words.join(" ";
  }
  return naujas;
}

console.log(spinWords("Hey fellow warriors"));
