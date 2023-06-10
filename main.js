console.clear();
// Let’s think about what’s happening in the nested loop in our example. For 
// each element in the outer loop array, myArray, the inner loop will run in 
// its entirety comparing the current element from the outer array, myArray[i], 
// to each element in the inner array, yourArray[j]. When it finds a match, it 
// prints a string to the console.

// let bobsFollowers = ['Vienas', '2', '3', '4'];
// let tinasFollowers = ['hello', 'Vienas', '4'];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++){
//   for(let j = 0; j < tinasFollowers.length; j++){
//     if (bobsFollowers[i] === tinasFollowers[j]){
//       mutualFollowers.push(tinasFollowers[j]);
//     }
//   }
// }

// console.log(mutualFollowers);

// function greet (name, owner) {
//   if(name === owner){
//    return console.log(`Hello boss`);
//   }else {
//   return console.log(`Hello guest`);
//   }
// }

// greet('karolis', 'vardas');

// console.clear();

//Reik butinai deklaruot kintamaji i kuri sumuosim suma teigiamu skaiciu, kitas dalykas
//tada eina per ilgi arejaus, loopas eina kol i mazesnis uz arejaus ilgi
//ife checkina ar elementas yra daugiau uz 0
//ir tada if true addina arejaus elementa

// function positiveSum(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// let arejus = [-5, 4, 3, 2, 10, -9, -5];

// console.log(positiveSum(arejus));


// console.clear();

// function hoopCount (n) {
//   if(n >= 10){
//    return `Great, now move on to tricks.`;
//   }else{
//    return `Keep at it until you get it.`;
//   }
  
// }

// console.log(hoopCount(10));

// console.clear();



// let string = (a) => {
//   let naujasStringas = 0;
//   for(let i = 0; i < a.length; i++){
//     if(a[i] > 0){
//       naujasStringas = console.log(a[i]);
//     }
//   }
//   return naujasStringas;
// }

// console.log(string('karolis'));

// console.clear();

// const deletedChar = str => {
//   return str.slice(1,-1);
// }

// console.log(deletedChar('karolis'));


// console.clear();

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

//let missing = (string) => string.replace(/5/g, 's');

// function missing(string) {
//   return string.replace(/5/g, 's').replace(/0/g, 'o').replace(/1/g, 'i');
// }

// console.log(missing('1ve0ka5'));

// dvieju areju suma

// function arrayPlusArray(arr1, arr2) {
//     let sum = 0;
//     let arr3 = [];
//     arr3 = arr1.concat(arr2);
//     for(let i = 0; i < arr3.length; i++){
//         sum += arr3[i]; 
//     }
//     return sum;
//   }

//   let arr = [5, 7, 8, 9];
//   let arr0 = [5, 10, 8, 2];
//   console.log(arrayPlusArray(arr, arr0));

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//     let sum = 0;
//     let average = 0;
//     if(array.length !== 0){
//         for(let i = 0; i < array.length; i++){
//             sum += array[i];
//             average = sum / array.length;
//         }
//     }else{
//         console.log('Array cannot be empty');
//     }
//     return average;
//   }

// let arejus = [5, 4, 2, 10, 5, 8, 4];

// console.log(findAverage(arejus));


// function findAverage(array){
//     let sum = 0;
//     let average = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === 0){
//             sum += array[i];
//             // average = sum / array[i];
//         }else {
//             console.log('Array cannot be empty!');
//         }
//     }
//     return sum;
// }

// let arejus = [];
// console.log(findAverage(arejus));

//reduce bandymas




//code wars code:

// function find_average(array) {
//     if (array.length === 0) {
//     return 0;
//     }
//     var result = 0;
//     for (i=0; i<array.length; i++) {
//       result +=array[i];
//     }
//     return result/array.length;
//   }

//code wars code 2:

// var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 
// and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function replace(string) {
//     let newArr = [];
//     let pakeistas = [];
//     let smallerArr = [];
//     newArr = string.split('');
//     for(let i = 0; i < newArr.length; i++){
//         pakeistas.push(newArr[i].replace(/1|2|3|4|5/g, 0));
//     }
//     return pakeistas;
// }

// let arejus = '122233246484648486';

// console.log(replace(arejus));


// function fakeBin(x) {
//     let arr = [];
//     let newArr = [];
//     arr = x.split('');
//     for(let i = 0; i < arr.length; i++){
//        if(arr[i] < 5){
//             newArr.push('0');
//         }else {
//            newArr.push('1');
//        }
//     }
//     return newArr.join('');
// }

// let arejus = '122233246484648486';

// console.log(fakeBin(arejus));

// code wars code:

// function fakeBin(x){
//     return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
//   }


// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// function countSheep(num) {
//     let i = num;
//     let count = '';
//     do {
//         count = console.log(`${i} sheep...`);
//         i++;
//     }while(i <= 5);
//     return count;
// }

// console.log(countSheep(5));

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 
// is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 
// is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// let number = '56456';

// console.log(String(number).split('').map(Number));

// let number = 24256772;

// let squareDigits = (num) => {
//     let result = '';
//     let number = '';
//     let array = String(num).split('').map(Number);
//         for(let i = 0; i < array.length; i++){
//             result += array[i] ** 2;
//         }
//         number = parseInt(result);
//     return number;
// }

// console.log(squareDigits(number));

// code from codewars:

//function squareDigits(num){
//     var string = num.toString();
//     var results = [];
//     for (var i = 0; i < string.length; i++){
//         results[i] = string[i] * string[i];
//     }
//     return Number(results.join(''));
// };


// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the 
// result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// let sequenceSum = (begin, end, step) => {
//     let result = 0;
//         for(let i = begin; i <= end; i = i + step){
//             result += i;
//         }
//         return result;
//   };

//   console.log(sequenceSum(2, 6, 2));

// const start = 0;
// const end = 5;
// let sum = 0;

// for (let i = 0; i <= 5; i++){
//     sum += i;
//     console.log(i, sum);

// }

// console.log(sum);

// console.clear();

// let pazymiai = [10, 2, 8, -7, 10];
// let sum = 0;
// let average = 0;
// let kiek = 0;

// for(let i = 0; i < pazymiai.length; i++){
//     if(pazymiai[i] > 0){
//         kiek++; 
//     }
// }


// console.log(kiek);







// This time no story, no theory. The examples below show you how to write function 
// accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and 
// A..Z.

// let accum = 'abcd';
// let arr = accum.split('');

//     accum.charAt().toUpperCase() + accum.slice(1);


// console.log(accum);

// const word = "freecodecamp"

// for(let i = 0; i < arr.length; i++) {
//     let firstLetter = [];
//     firstLetter = arr[i].charAt(0).toUpperCase();
//     firstLetter += 'a';
//     console.log(firstLetter);

// }

// Write a function to convert a name into initials. This kata strictly takes 
// two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// let stringas = 'karolis ka';
// let firstLetter = stringas.match(/\b(\w)/g);
// let join = firstLetter.join('.').toUpperCase();

// console.log(join);

//codewars code: 
//function abbrevName(name){

// var nameArray = name.split(" ");
// return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();}

// let arr = [2, 4, -5, 6, 7, -8];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += i;
//     console.log(arr[i], sum);
// }


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// let stringas = ['vienas', 'du', 'trys'];

//string to hex???

// function stringToHex(stringas){
//     let arr = [];
//     let hex = 0;
//     let result = '';

//     for(let i = 0; i < stringas.length; i++){
//         hex = stringas.charCodeAt(i).toString(16);
//         result += ("000"+hex).slice(-4);
//     }
//     return result;
// }


// console.log(stringToHex('Hello, kar kar'));

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// let array = ["3:1", "2:2", "0:1"];

// let array1 = array.map();

// console.log(array);

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


// function paperwork(n, m) {
//     let sum = 0;
//     if(n < 0 && m < 0){
//       return 0;
//     }else if (n > 0 &&  m > 0) {
//       sum = n * m;
//     }
//     return sum;
//   }
  
//   console.log(paperwork(-5,-5));

// matching hello in other languages
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

// function validateHello(stringas){
//     let greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
//     let lower = stringas.toLowerCase();
//     for(let i = 0; i < greetings.length; i++){
//         if(lower.includes(greetings[i])){
//             return true;
//         }
//         }
//         return false;
//     }

// console.log(validateHello('hoLA'));

//jungiam


function longestConsec(strarr, k) {
    const n = strarr.length;
  
    if (n === 0 || k > n || k <= 0) {
      return "";
    }
  
    let longestString = "";
  
    for (let i = 0; i <= n - k; i++) {
        console.log(i);
      const currentString = strarr.slice(i, i + k).join("");
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
    }
  
    return longestString;
  }


  const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 2;
const result = longestConsec(strarr, k);
console.log(result); // Output: "folingtrashy"
