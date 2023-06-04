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

