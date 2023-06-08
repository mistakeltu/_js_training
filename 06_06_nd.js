console.clear();

// Kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
// m1:1 -> 3
// m1:2 -> 0
// m1:3 -> 0
// m2:1 -> 1
// m2:2 -> 2
// m2:3 -> 1
// m4:1 -> 5
// m4:2 -> 3
// m4:3 -> 2

// const masyvas1 = [1, 1, 1];
// const masyvas2 = [1, 2, 2, 3];
// const masyvas3 = [5, 4, 3, 2, 1];
// const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];


// let kiekis = (masyvas, skaicius) => {
//     let vienodi = 0;
//     for(let i = 0; i < masyvas.length; i++ ){
//         if(masyvas[i] === skaicius){
//             vienodi++;
//         }
//     }
//     return vienodi;
// }

// console.log(kiekis(masyvas1, 1));





// Ciklo for panaudojimas
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// -50 … 50
// -70 … 30
// Intervalas 0 ... 0
// Pratestuota

// let start = -4;
// let end = 4;

// let sumIntervale = 0;

// for (let i = start; i <= end; i++){
//     sumIntervale += i;
// }

// console.log(sumIntervale);










// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”
// “abcdef” -> “fedcba”

// let arejus = stringas.split('');
// let naujasStringas = '';
// for (let i = arejus.length - 1; i >= 0; i--){
//     naujasStringas += arejus[i];
//     console.log(naujasStringas);
// }

//------------------------------------------------------------------

// let stringas = 'abcdef';

// let back = (stringas) => {
//     //let arejus = stringas.split('');
//     let naujasStringas = '';

//     for (let i = stringas.length - 1; i >= 0; i--){
//         naujasStringas += stringas[i];
//     }
//     return naujasStringas;
// }

// console.log(back(stringas));













// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.




// let start = 0;
// let end = 11;

// let skaicius = 7;


// let intervalas = (start, end, skaicius) => {
//     let beLiekanos = 0;
//     for(let i = start; i <= end; i++){
//         if(i % skaicius === 0){
//             beLiekanos++;
//         }
//     }
//     return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be 
//     liekanos iš ${skaicius} yra ${beLiekanos} vienetai.`;
// }

// console.log(intervalas(start, end, skaicius));







