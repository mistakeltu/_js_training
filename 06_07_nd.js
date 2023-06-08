console.clear();
//----------------------------------------------------
// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false
//---------------------------------------------------

// function tusciaFunkcija(){
//     return false;
// }

// console.log(tusciaFunkcija());

//----------------------------------------------------

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

//----------------------------------------------------

// let a = 5;
// let b = true;
// let multi = 0;

// function multiply(skaicius, skaicius1){
//     if (typeof skaicius !== 'number' || !isFinite(skaicius)){
//             return `Only numbers, ok?`;
//         }else if (typeof skaicius1 !== 'number' || !isFinite(skaicius1)){
//             return `Only numbers, ok?`; 
//         }
//         multi = skaicius * skaicius1;
//         return multi;
//     }

// console.log(multiply(a, b));

//----------------------------------------------------

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

//----------------------------------------------------



// const skaicius = 5465465465;
// let kiek = 0;
// let string = 0;

// function skaitmenuKiekis(number) {
//         if (typeof number !== 'number' || !isFinite(number)){
//         console.log(`Reik gi skaiciaus, ok?`);
//         }else{
//             string = number.toString().replace('.',''); //<----- vaziuoja ir floatam
//             for(let i = 0; i < string.length; i++){
//                 kiek++;
//             }
//         }
//         return `Skaiciuje skaitmenu yra: ${kiek}`;
//     }
    
// console.log(skaitmenuKiekis(skaicius));

//----------------------------------------------------

// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
// TESTAI:
// console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// rezultatas: 1
// console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// rezultatas: 3
// console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// rezultatas: 78
// console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// rezultatas: 69
// console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// rezultatas: -1
// console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( didziausiasSkaiciusSarase( [] ) );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”

//----------------------------------------------------
//Nevaziuoja 0??????????

// let arr = [-10, -2, -1];
// let theNumber = 0;

// function max(arejus){
//     //console.log(typeof arejus);
//     if (typeof arejus !== 'object' || arejus.length === 0){
//               return `Pateiktas sąrašas negali būti tuščias.`;
//             }
//     for(let i = 0; i < arejus.length; i++){
//         if(typeof arejus[i] === 'string'){  //<----- && !isFinite(arejus)?????????
//             return `Pateikta netinkamo tipo reikšmė.`;
//         }
//         if(theNumber === 0 || arejus[i] > theNumber){ //<------ Nelabai aisku??????? (arejus[i] > theNumber)
//             theNumber = arejus[i];
//         }
//     }
//     return `Didziausias skaicius: ${theNumber}`;
// }


// console.log(max(arr));

//----------------------------------------------------

// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

//----------------------------------------------------

// let stringas = 5464654;
// let number = 2;
// let newStringelis = '';


// function isrinkRaide(tekstas, skaicius){
//      //console.log(stringas.length, skaicius);
//     if(typeof tekstas !== 'string' || stringas.length === 0){
//         return `Pirmasis kintamasis yra netinkamo tipo`;
//     }else if(stringas.length >= 100){
//         return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`;
//     }else if(typeof skaicius !== 'number'){
//         return `Antrasis kintamasis yra netinkamo tipo.`;
//     }else if(skaicius < 0) {
//         return `Antrasis kintamasis turi būti didesnis už nulį.`;
//     }else if(skaicius >= tekstas.length){
//         return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`;
//     }
//      for(let i = 0; i < tekstas.length; i+=number){
//         newStringelis += tekstas[i];
//      }

//     return newStringelis;
// }

// console.log(isrinkRaide(stringas, number))


//----------------------------------------------------

// Funkcija pavadinimu “dalyba”:
// turi priimti du kintamuosius
// reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// esant geroms - tęsti darbą
// į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// daliname pirmąjį skaičių iš antrojo
// grąžinti suskaičiuotą reikšmę
// TESTAI:
// sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

//----------------------------------------------------


// let divide = 0;

// function dalyba(skaicius, skaicius1){
//     if (typeof skaicius !== 'number' || !isFinite(skaicius)){
//         return `Only numbers, ok?`;
//         }else if (typeof skaicius1 !== 'number' || !isFinite(skaicius1)){
//             return `Only numbers, ok?`; 
//         }
//         divide = skaicius / skaicius1;
        
//         return divide;
//     }

// console.log(dalyba(5, 0)); //<------------Kodel infinity???????????????
// console.log(dalyba(0, 5)); //Cia gerai????
// console.log(dalyba(10, 5));
// console.log(dalyba(-10, 5));
// console.log(dalyba(10, -5));
// console.log(dalyba(true, -5));
// console.log(dalyba(true, false));
// console.log(dalyba(NaN, false));
// console.log(dalyba(5, NaN));
// console.log(dalyba(Infinity, NaN)); // ir t.t..............


