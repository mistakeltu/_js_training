console.clear();


let rezultatas = '';
for(let i = 1; i <= 400; i++) {
    rezultatas += '*';
 
    if(i % 50 === 0)
        rezultatas += '</br>';
}

let random = '';
let bigger = '';

for(let i = 0; i <= 300; i++){
    random += `${i}</br>`;

    if (random >= 0){
        bigger = random;
    }
}

console.log(rezultatas);
console.log(random);
document.write(rezultatas);
document.write(random);