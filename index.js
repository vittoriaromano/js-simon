'use strict'
//FUNCTIONS

// funzione prompt  
function prmpttNumber(){
     //array of Usernumb  - con il ciclo non mi funziona
    numberUser = [Number (prompt ('inserisci un numero visualizato')),
     Number (prompt ('inserisci un numero visualizato')),
     Number (prompt ('inserisci un numero visualizato')),
     Number (prompt ('inserisci un numero visualizato')),
     Number (prompt ('inserisci un numero visualizato')),]

    console.log(numberUser);
    //comparare le due
    let numbersEql = [];
    numbersEql  = arrRandom.filter((data) => numberUser.includes(data));
    console.log(numbersEql);
    impNumb.innerHTML = ('Ti sei ricordato questi numeri; ' + numbersEql + '!')

}

//funzione rimuover arr A
function numerarr(){
      impNumb.innerHTML = ''
}

//MAIN
let numberUser = [];

setTimeout(prmpttNumber, 30000); //timer 30s prompt

setTimeout(numerarr, 29000); // timer 2.9 s rimuover arr A


//creare un array di numeri random che verranno visualizati nel dom. (A)

const arrRandom = [2,4,6,3,5];
let impNumb = document.getElementById('imp-numb');
impNumb.innerHTML = arrRandom;
console.log(arrRandom)






