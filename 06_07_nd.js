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




// let string = 0;

// function skaitmenuKiekis(number) {
//     let kiek = 0;
//         if (typeof number !== 'number' || !isFinite(number)){
//         console.log(`Reik gi skaiciaus, ok?`);
//         }else{
//             string = number.toString().replace('.',''); //<----- vaziuoja ir floatam
//             kiek = string.length; //<----- nereik foro, kiek yra tiesiog stringo ilgis
            
//         }
//         return `Skaiciuje skaitmenu yra: ${kiek}`;
//     }
    
// console.log(skaitmenuKiekis(546546));
// console.log(skaitmenuKiekis(5445));
// console.log(skaitmenuKiekis(2.5));
// console.log(skaitmenuKiekis(2.54555));

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

// let arr = [Infinity];

// function max(arejus){
//     let theNumber = 0;
//     //console.log(typeof arejus);
//     if (typeof arejus !== 'object' || arejus.length === 0){
//               return `Pateiktas sąrašas negali būti tuščias.`;
//             }
//     for(let i = 0; i < arejus.length; i++){
//         if(typeof arejus[i] === 'string'){  //<----- && !isFinite(arejus)?????????
//             return `Pateikta netinkamo tipo reikšmė.`;
//         }
//         if(theNumber === 0 || arejus[i] > theNumber){ //<------ Nelabai aisku??????? (arejus[i] > theNumber) theNumber === 0 ||
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



// function isrinkRaide(tekstas, skaicius){
//     let newStringelis = '';
//      //console.log(stringas.length, skaicius);
//     if(typeof tekstas !== 'string' || tekstas.length === 0){
//         return `Pirmasis kintamasis yra netinkamo tipo arba tuscias`;
//     }else if(tekstas.length >= 100){
//         return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`;
//     }else if(typeof skaicius !== 'number' || isNaN(skaicius)){
//         return `Antrasis kintamasis yra netinkamo tipo.`;
//     }else if(skaicius <= 0) {
//         return `Antrasis kintamasis turi būti didesnis už nulį.`;
//     }else if(skaicius >= tekstas.length){
//         return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`;
//     }
//      for(let i = 0; i < tekstas.length; i+=skaicius){
//         newStringelis += tekstas[i];
//      }

//     return newStringelis;
// }
// //TESTAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!
// console.log(isrinkRaide('', 0));
// console.log(isrinkRaide('labas', 2));
// console.log(isrinkRaide('Petrelis', 2));
// console.log(isrinkRaide(null, 0));
// console.log(isrinkRaide('dasdasd', null));
// console.log(isrinkRaide(null));
// console.log(isrinkRaide({}));
// console.log(isrinkRaide());
// console.log(isrinkRaide('Wazeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 3));
// console.log(isrinkRaide('labas', NaN));
// console.log(isrinkRaide(NaN, 2));
// console.log(isrinkRaide(Infinity, 2));
// console.log(isrinkRaide(-Infinity, 2));
// console.log(isrinkRaide(true, 2));
// console.log(isrinkRaide(false, 2));
// console.log(isrinkRaide(undefined, 2));
// console.log(isrinkRaide(0, 2));
// console.log(isrinkRaide('dasdasdas', 500));
// console.log(isrinkRaide('dasdasdas', false));
// console.log(isrinkRaide('dasdasdas', NaN));
// console.log(isrinkRaide('dasdasdas', undefined));
// console.log(isrinkRaide('dasdasdas', true));
// console.log(isrinkRaide('dasdasdas', [1,2,3]));
// console.log(isrinkRaide('dasdasdas', []));
// console.log(isrinkRaide());
// console.log(isrinkRaide('', 2));
// console.log(isrinkRaide('dasdasdas', Infinity)); //<-----
// console.log(isrinkRaide('dasdasdas', -Infinity)); //<------
// console.log(isrinkRaide('dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 2));



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



function dalyba(skaicius, skaicius1){
    let divide = 0;
    if (typeof skaicius !== 'number' || !isFinite(skaicius)){
        return `Only numbers, ok?`;
        }else if (typeof skaicius1 !== 'number' || !isFinite(skaicius1)){
            return `Only numbers, ok?`; 
        }
        if(skaicius === 0 || skaicius1 === 0){
            return `Dalyba is nulio negalima`;
        }
            divide = skaicius / skaicius1;
            return divide;
    
        
        if (skaicius < 0 || skaicius1 < 0 ){
            skaicius *= -1;
            skaicius1 *= -1;
        }
    }


//TESTAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!
console.log(dalyba(5, 2));
console.log(dalyba(2, 5));
console.log(dalyba(-5, 5));
console.log(dalyba(5, -5));
console.log(dalyba(-5, -5));
console.log(dalyba(NaN, -5));
console.log(dalyba(Infinity, -5));
console.log(dalyba(Infinity, Infinity));
console.log(dalyba(NaN, NaN));
console.log(dalyba());
console.log(dalyba(5, 0));
console.log(dalyba(undefined, 0));
console.log(dalyba(5, undefined));
console.log(dalyba(Infinity, undefined));
console.log(dalyba(Infinity, 5));
console.log(dalyba(5, Infinity));
console.log(dalyba(5, -Infinity));
console.log(dalyba(5, ''));
console.log(dalyba(5, []));
console.log(dalyba([], 5));
console.log(dalyba('', 5));
console.log(dalyba(null, 5));
console.log(dalyba(null, null));
console.log(dalyba(5, null));
console.log(dalyba('dasdasdas', 500));
console.log(dalyba('dasdasdas', false));
console.log(dalyba('dasdasdas', NaN));
console.log(dalyba('dasdasdas', undefined));
console.log(dalyba('dasdasdas', true));
console.log(dalyba('dasdasdas', [1,2,3]));
console.log(dalyba('dasdasdas', []));

