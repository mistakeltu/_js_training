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

let sequenceSum = (begin, end, step) => {
    let result = [];
        for(let i = begin; i <= end; i = i + step){
            result.push(i);
        }
        return result;
  };

  console.log(sequenceSum(2, 6, 2));

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
