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

//str.match(/{|}|\[|\]/g)

//(/\[|\]/g)

// function validBraces(braces){
//     if(braces.length === 0){
//       return `It should be not empty:)`;
//     }
//     for(let i = 0; i < braces.length; i++){
//       if(braces[i].match(/{|}|\[|\]/g)){
//         return true;
//       }else {
//         return false;
//       }
//     }
//   }

//   console.log(validBraces('{]'));

// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   let howManyLeft = 0;
//   howManyLeft = (blueStart - bluePulled) + (redStart - redPulled);
//   let chances = (blueStart - bluePulled) / howManyLeft;

//   return chances;
// }


// console.log(guessBlue(5,5,2,3));
// console.log(guessBlue(5, 7, 4, 3));
// console.log(guessBlue(12, 18, 4, 6));


// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//10 ** 3

// function past(h, m, s){
//   let result = 0;
//   if(0 !== h && h <= 23){
//     h = h * 60 * 60 * (10 ** 3);
//   }
//   if(0 !== m && m <= 59){
//     m = m * 60 * (10 ** 3);
//   }
//   if(0 !== s && s <= 59){
//     s = s * 1 * (10 ** 3);
//   }

//     result = h + m + s;
  
  
//   return result;
// }

// console.log(past(1, 44, 37));

// //CODEWARS KODAI:

// function past(h, m, s){
//   var hours = h * 60 * 60 * 1000;
//   var minutes = m * 60 * 1000;
//   var seconds = s * 1000;
  
//   return hours + minutes + seconds;
// }

// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// var summation = function (num) {
//   let sum = 0;
//   if ( num < 0 ){
//     return `Should be positive!`;
//   }
//   for(let i = 1; i <= num; i++){
//     sum += i;
//   } 
//   return sum;
// }

// console.log(summation(8));

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//   return opp = number * (-1);
// }

// console.log(opposite(5));

// CODEWARS KODAI:

// function opposite(number) {
//   return(-number);
// }

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// function litres(time) {
//   let litters = 0;
//   litters = Math.floor(time * 0.5);
//   return litters;
// }

// console.log(litres(11.8));

// CODEWARS kodai:

// function litres(time) {
//   return Math.floor(time/2);
// }

// const litres = time => Math.floor(time * 0.5);


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


// const areaOrPerimeter = function(l , w) {
//   let sum = l === w ? l * w : l * 2 + w * 2;

//   return sum;
// }

// console.log(areaOrPerimeter(6, 10));

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

// function century(year) {
//   let century = Math.ceil(year/100);

//   return century;
// }

// console.log(century(8));


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// // The correct answer would be 17.

// // Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//   let result = 0;
//   if (!Array.isArray(arrayOfSheep)){
//    return `Not array`; 
//   }
//   for(let i = 0; i < arrayOfSheep.length; i++){
//     if(arrayOfSheep[i] === true){
//       result++;
//     }  
//   }
//   return result;
//   }

//   console.log(countSheeps(

//     [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
    
//     ));


// CODEWARS kodai:

// function countSheeps(arr) {
//   return arr.filter(Boolean).length;
// }


// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// function enough(cap, on, wait) {
//   let left = cap - on;
//   let cantFit = wait - left;
//   if (left >= wait){
//     return 0;
//   }else {
//     return `netelpa`;
//   }

// }

// console.log(enough(100, 60, 50));

//CODEWARS kodai:

// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.
//   let result = 0;
//   let bullets = info * 3;
//   let arr = [['PT92', 17], ['M4A1', 30], ['M16A2', 30], ['PSG1', 5]];
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i][0] === arr[i][0]){
//       if(arr[i[1]] < bullets){
//         result = Math.floor(bullets / arr[i][1])
//       }else{
//         return 1;
//       }
//     }
//     return `nera`;
//   }
//   return result;
// }


// function magNumber(info){

  
// }

// console.log(magNumber(['PT92', 17]));

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num) {
//     var total = num + 5
//     return total;
//   }

// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

// function greet(){
//     return `Hello, World!`;
// }

// console.log(greet());


// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.


// function switchItUp(number){
//     switch(number){
//         case 1:
//             return 'One';
//         case 2:
//              return 'Two';
//         case 3:
//             return'Three';
//         case 4:
//             return 'Four';
//         case 5:
//             return 'Five';
//         case 6:
//             return 'Six';
//         case 7:
//             return 'Seven';
//         case 8:
//             return 'Eight';
//         case 9:
//             return 'Nine';
//         default:
//             return 'Invalid number';
//     }
// }

// console.log(switchItUp(1));

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//     let bmi = weight / height / height;
//     console.log(bmi);
//     if(bmi <= 18.5){
//         return 'Underweight';
//     }
//     if(bmi <= 25.0){
//         return 'Normal';
//     }
//     if(bmi <= 30.0) {
//         return 'Overweight';
//     }
//     if(bmi > 30.0){
//         return 'Obese';
//     }
//   }

//   console.log(bmi(80, 1.80));

// CODEWARS KODAI:

// function bmi(weight, height) {
//     var result = weight/Math.pow(height,2) 
    
//     if (result <= 18.5) {
//       return "Underweight";
//     } else if (result <= 25) {
//       return "Normal";
//     } else if (result <= 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
    
//   }

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// function otherAngle(a, b) {
//     let angle = 0;
//     if(a > 0 && b > 0){
//         angle = 180 - a - b;
//     }
//     return angle;
//   }

//   console.log(otherAngle(30, 60));


//   CODEWARS KODAI:

//   function otherAngle(a, b) {
//     return 180-(a+b);
//   }


// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


// function findDifference(a, b) {
//     let sum = 0;
//     sum = a[0] * a[1] * a[2] - b[0] * b[1] * b[2];
//     if(sum < 0){
//         sum *= - 1;
//     }
//     return sum;
//   }

//   CODEWARS KODAI:

//   function find_difference(a, b) {
//     return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
//   }


// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


// function addLength(str) {
//     let result = 0;
//     result = str.split(' ').map(x => {
//         return x + " " + x.length;
//     });
//     return result;
//     }

//     console.log(addLength('karolis kava le mar'));
    
// CODEWARS KODAI:

// function addLength(str){
//     return str.split(" ").map(s => `${s} ${s.length}`)
//   }


// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


// function reverseWords(str){
//     let result = str.split(' ');
//     let newWords = '';
//     for(let i = result.length; i > 0; i--){
//         newWords += ' ' + result[i - 1];
//     }
//     return newWords.trim();
//   }

//   console.log(reverseWords('yoda doesnt speak like this'));

//   CODEWARS KODAI:

//   function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// function digitize(n) {
//     let result = '';
//     let newArr = 0;
//     let arr = Array.from(String(n), Number);
//        for(let i = arr.length; i > 0; i--){
//         result += arr[i - 1];
//         newArr = Array.from(String(result), Number);
//        }

//         return newArr;
//     }

//   console.log(digitize(35222));

//   CODEWARS KODAI:

//   function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 


// function squareSum(numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i] ** 2;
//     }
//     return sum;
// }

// console.log(squareSum([2, 4, 3]));

// CODEWARS KODAI:

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//     let reverse = [];

//     if(n <= 0){
//         return `NO!`;
//     }
//     for(let i = n; i > 0; i--){
//         reverse.push(i);
//     }
//     return reverse;
//   }

//   console.log(reverseSeq(100));

//   CODEWARS KODAI:

//   const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

//arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//     let result = [];
//     if(b.length === 0){
//         return a;
//     }else if(a.length === 0){
//         return a;
//     }
//     for(let i = 0; i < a.length; i++){
//         let found = false;
//         for(let j = 0; j < b.length; j++){
//             if(a[i] === b[j]){
//                 found = true;
//                 break;
//         }
//     }
//     if(!found){
//         result.push(a[i]);
//     }
// }
//     return result;
// }

// console.log(arrayDiff([ -13, -4, 18, -19, -9, 17, 0, -13, -14, 14 ], [0, -14, 14]));


//function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }

// const arr1 = [1, 3, 2, 3, 4, 5, 3]
// const arr2 = [3, 2]
// function difference(a1, a2) {
//   const res = a1.filter(item => !a2.includes(item))
//   console.log(res)



// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// const max = function(list){
//     let max = -Infinity;
//     for(let i = 0; i < list.length; i++){
//         if(list[i] > max){
//             max = list[i];
//         }
//     }
//     return max;
// }

// console.log(max([42, 54, 65, 87, 0]));

// let min = function(list){
//     let min = Infinity;
//     for(let i = 0; i < list.length; i++){
//         if(list[i] < min){
//             min = list[i];
//         }
//     }
//     return min;
// }

// console.log(min([42, 54, 65, -101, -100]));

//codewars:

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// function invert(array) {
//     let result = 0;
//     let newArr = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > 0 || array[i] < 0){
//             result = array[i] * (-1);
//             newArr.push(result); 
//         }else if (array[i] === 0){
//             result = array[i];
//             newArr.push(result);
//         }
//     }
//     return newArr;
//   }

//   console.log(invert([]));

//   CODEWARS kodai:

//   const invert = array => array.map(num => -num);

//   function invert(array) {
//     var newArr = [];
//     for(var i = 0; i < array.length; i++){
//       newArr.push(-array[i]);
//     }
//      return newArr;
//   }


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// function doubleChar(str) {
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         result += str[i].repeat(2);
//     }
//     return result;
//   }

//let doubleChar = (stringas) => stringas.split('').map(x => x + x).join("");

//   console.log(doubleChar('lol'));

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// function countSheep(num) {
//     let count = '';
//     for(let i = 1; i <= num; i++){
//          count += `${i} sheep...`;
//     }
//     return count;
// }

// console.log(countSheep(3));

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//     let newString = s1.concat(s2).split('').sort();
//     newString = Array.from(new Set(newString)).join("");
    
//     return newString;
//   }

//   console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


//   CODEWARS kodai:

//   function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('');
//   }

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Sum Numbers

// function sum (numbers) {
//     let sum = 0;
//       for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//       }
//     return sum;
      
//   }

//   console.log(sum([]));


// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
//   }

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// function findShort(s){
//     let arr = s.split(' ');
//     let min = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length < min){
//             min = arr[i].length;
//         }
//     }
//     return min;
// }
// console.log(findShort('vienas du trys'));

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// function isUpperCase(stringas) {
//     if(stringas === stringas.toUpperCase()){
//         return true;
//     }else {
//         return false;
//     }
// }
//  console.log(isUpperCase('KAROLIS'));

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(stringas){
//     let arr = [];
//     for(let i = 0; i < stringas.length; i = i + 2){
//         arr.push(stringas[i]);
//     }
//     return arr;
// }

// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// CODEWARS kodai:

// function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//       return index % 2 === 0;
//     });
//   }

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//------------------------------------

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
// 

// function sumMix(x){
//     let sum = 0
//     for(let i = 0; i < x.length; i++){
//         sum += Number(x[i]);
//     }
//     return sum;
// }

// console.log(sumMix([9, 3, '7', '3']));

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// let maps = x => x.map(x => x*2);

// CODEWARS kodai:

// function maps(x){
//     return x.map(n => n * 2);
//   }

// function monkeyCount(n) {
//     let arr = [];
//     if (n <= 0){
//         return 0;
//     }
//     for(let i = 1; i < n + 1; i++){
//         arr.push(i);
//     }
//     return arr;
//     }

//     console.log(monkeyCount(0));

//CODEWARS:

// for (var i = 0, arr = []; i < n; arr.push(++i));

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//     let arr = [];
//     for(let i = a; i < b+1; i++){
//         arr.push(i);
//     }
//     return arr;
//   }

//   console.log(between(-2, 4));

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// function calculateTip(amount, rating) {
//     let terrible = 'Terrible';
//     let poor = 'poor';
//     let good = 'good';
//     let great = 'great';
//     let excellent = 'exellent';
//     let sum = 0;

//     if(rating.toUpperCase() === terrible.toUpperCase()){
//         sum = Math.ceil((amount * 0) / 100)
//     }else if(rating.toUpperCase() === poor.toUpperCase()){
//         sum = Math.ceil((amount * 5) / 100)
//     }else if(rating.toUpperCase() === good.toUpperCase()){
//         sum = Math.ceil((amount * 10) / 100)
//     }else if(rating.toUpperCase() === great.toUpperCase()){
//         sum = Math.ceil((amount * 15) / 100)
//     }else if(rating.toUpperCase() === excellent.toUpperCase()){
//         sum = Math.ceil((amount * 20) / 100)
//     }else{
//         return `Rating not recognised`;
//     }
//     return sum;
// }

// console.log(calculateTip(26.95, '4'))

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10){
//         return 100;
//     }else if(exam > 75 && projects >= 5){
//         return 90;
//     }else if(exam > 50 && projects >=2){
//         return 75;
//     }else{
//         return 0;
//     }
//   }

//   console.log(finalGrade(33, 10));

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// function findMultiples(integer, limit) {
//     let arr = [];
//     for(let i = integer; i <= limit; i = i + integer ){
//         arr.push(i);
//     }
//     return arr;
//   }

//   console.log(findMultiples(5, 10));

//   CODEWARS kodai:

//   function findMultiples(int,limit){
//     let result = []
    
//     for (let i = int; i<=limit ; i+=int)
//       result.push(i)
      
//     return result
//   }

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// var number = function(busStops){
//     let result = 0;
//     for(let i = 0; i < busStops.length; i++){
//         result += busStops[i][0] - busStops[i][1];    
//     }
//     return result;
//   }

// console.log(number([[10,0],[3,5],[5,8]]));

// CODEWARS kodai:

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// function toCsvText(array) {
//     let result = '';
//     for(let i = 0; i < array.length; i++){
//         result += array[i];
//         if(i !== array.length - 1){
//             result += '\n';
//         }
//     }
//     return result;
//  }

//  console.log(toCsvText(
//    [[ 0, 1, 2, 3, 4 ],
//      [ 10,11,12,13,14 ],
//      [ 20,21,22,23,24 ],
//      [ 30,31,32,33,34 ]] 
//  ));

//  CODEWARS kodai:

//  function toCsvText(array) {
//     return array.join('\n');
//  }

// // DON'T TOUCH THIS LINE! (please)
// const word = "skateboard"; //Don't change this line!

// // YOUR CODE BELOW THIS LINE:

// word.slice(4);

// console.log(word.slice(5).replace('o', 'e'));

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x){
//     let sum = 0;
//     if(typeof x === 'number'){
//       sum = x * 50 + 6;
//     }else {
//       return 'Error';
//     }
//     return sum;
//   }

