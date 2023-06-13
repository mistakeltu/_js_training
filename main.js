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


// function longestConsec(strarr, k) {
//     const n = strarr.length;
  
//     if (n === 0 || k > n || k <= 0) {
//       return "";
//     }
  
//     let longestString = "";
  
//     for (let i = 0; i <= n ; i++) {
//         console.log(n);
//       const currentString = strarr.slice(i, i + k).join("");
//       console.log(currentString);
//       if (currentString.length > longestString.length) {
//         longestString = currentString;
//       }
//     }
  
//     return longestString;
//   }


//   const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
// const k = 2;
// const result = longestConsec(strarr, k);
// console.log(result);


// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury';
//       break;
//     case 2:
//       name = 'Venus';
//       break;
//     case 3:
//       name = 'Earth';
//       break;
//     case 4:
//       name = 'Mars';
//       break;
//     case 5:
//       name = 'Jupiter';
//       break;
//     case 6:
//       name = 'Saturn';
//       break;
//     case 7:
//       name = 'Uranus';
//       break;
//     case 8:
//       name = 'Neptune';
//       break;
//   }
  
//   return name;
// }

// console.log(getPlanetName(4));

// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// function arrayMadness(a, b) {
//   let asum = 0;
//   let bsum = 0;
//   for(let i = 0; i < a.length; i++){
//     asum += a[i] ** 2;
//   }
//   for(let j = 0; j < b.length; j++){
//     bsum += b[j] ** 3;
//   }
//   if(asum > bsum){
//     return true;
//   }
//   return false;
  
// }

// console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

//code wars codes:

//const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

//function arrayMadness(a, b) {
//   return a.reduce( (sum, el) => sum + el ** 2, 0) >
//          b.reduce( (sum, el) => sum + el ** 3, 0);
// }

// const sumPwrs = (a, p) => a.reduce( (s, n) => s + n ** p, 0);
// const arrayMadness = (a, b) => sumPwrs(a, 2) > sumPwrs(b, 3);

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// function correctPolishLetters (string) {
//   let result = '';
//   let arrletters = [ 'ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
//   let replace = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
//   result = string;
  
//   for (let i = 0; i < arrletters.length; i++){
//       result = result.replace(arrletters[i], replace[i]);
//   }
//   return result;
// }

// console.log(correctPolishLetters('Wladysław Reymont'));
// console.log(correctPolishLetters('Lech Wałęsa'));
// console.log(correctPolishLetters('Maria Skłodowska-Curie'));



// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// function strCount(str, letter){  
//   let result = 0;
//     if (str.length === 0){
//       return 0;    
//     }
//     for(let i = 0; i < str.length; i++){
//       if (str[i] === letter){
//         result++;
//       }
//       } 
//       if (result === 0){
//         return 0;
//       }

//       return result;
//     }


// console.log(strCount('gfgfdgwwwdf', 'w'));


//code wars kodai:

//function strCount(str, letter){  
//   return str.split(letter).length-1
// }


// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// function testEven(n) {
//  if (n % 2 === 0){
//   return true;
//  }else {
//   return false;
//  }
// }

// console.log(testEven());

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   let kiek = distanceToPump / mpg;

//   if(kiek <= fuelLeft){
//     return true;
//   }else {
//     return false;
//   }

// };


//TESTAI
//assert.equal(zeroFuel(100, 50, 1), false);
// console.log(zeroFuel(50,25,2));

//CODE WARS KODAI:

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump/mpg <= fuelLeft
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;


// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// function differenceInAges(ages){
// let newAges = [];
// let max = 0;
// let min = Infinity;
// let difference = 0;
// for(let i = 0; i < ages.length; i++){
//   if(max < ages[i]){
//     max = ages[i];
//   }
// }
// for(let j = 0; j < ages.length; j++){
//   if (ages[j] < min){
//     min = ages[j];
//   }
// }
// difference = max - min;
// newAges.push(min, max, difference);
// return newAges;

// }

// //console.log(newAges);
// console.log(differenceInAges([82, 15, 6, 38, 35]));

//TESTAI
// differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
// differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

//CODEWARS KODAI:

// function differenceInAges (ages) {

//   let max = Math.max(...ages),
//       min = Math.min(...ages)
//       diff = max - min
      
//   return [min, max, diff]
// }



// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)


// function hero(bullets, dragons){
//   if (bullets / dragons >= 2){
//     return true;
//   }else {
//     return false;
//   }
//   }

//   console.log(hero(7 / 4));

//CODEWARS KODAI:

// function hero(bullets, dragons){
//   return bullets >= dragons * 2
// }


// function hero(bullets, dragons){
//   //Get Coding!
//   return (bullets / 2 >= dragons) ? true : false;
//   }


// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// function getDrinkByProfession(param){
//     let string = '';
//     string = param.toLowerCase();
//     if(string === 'jabroni'){
//         return "Patron Tequila";
//     }else if(string === "school counselor"){
//         return "Anything with Alcohol";
//     }else if(string === "programmer"){
//         return "Hipster Craft Beer";
//     }else if(string === "bike gang member"){
//         return "Moonshine";
//     }else if(string === "politician"){
//         return "Your tax dollars";
//     }else if(string === "rapper"){
//         return "Cristal";
//     }else {
//         return "Beer";
//     }
// }

// console.log(getDrinkByProfession('Bike Gang Member'));

//CODEWARS KODAI:

// function getDrinkByProfession(param) {
//     param = param.toLowerCase();
    
//     switch(param) {
//       case "jabroni": return "Patron Tequila";
//       case "school counselor": return "Anything with Alcohol";
//       case "programmer": return "Hipster Craft Beer";
//       case "bike gang member": return "Moonshine";
//       case "politician": return	"Your tax dollars";
//       case "rapper": return "Cristal";
//       default: return "Beer";
//     }
//   }

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// function tripleTrouble(one, two, three){
//     let result = '';  
//     for(let i = 0; i < one.length; i++){
//         result += one[i] + two[i] + three[i];    
//     }
//     return result;
//    }

//    console.log(tripleTrouble("burn", "reds", "roll")); //brrueordlnsl

//    //CODEWARS kodai:

//    function tripleTrouble(one, two, three) {
//     var result = "";
//     for (let i = 0; i < one.length; i++) {
//       result += one.charAt(i) + two.charAt(i) + three.charAt(i);
//     }
//     return result;
//   }

//   const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");

//------------------------------------------------------

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    //TODO 
  }