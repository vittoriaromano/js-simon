'use strict'
//FUNCTIONS

// funzione prompt  
function prmpttNumber(){
     //array B
    // for (let i=0; i <5; i++){
    //      numberUser.push(Number (prompt ('inserisci un numero visualizato')));

    // }
    console.log(numberUser);


    //comparare array A con B
    let numbersEql = [];
    numbersEql  = arrRandom.filter((data) => numberUser.includes(data));//invece dell' if value.includes value2[i]
    console.log(numbersEql);
    impNumb.innerHTML = ('Ti sei ricordato questi numeri; ' + numbersEql + '!')

}

//funzione rimuovere array A
function numerarr(){
      impNumb.innerHTML = ''
}

//MAIN


let numberUser = [];

setTimeout(prmpttNumber, 30000); //timer 30s prompt

setTimeout(numerarr, 29000); // timer 2.9 s rimuover arr A



//timer giocatore

const sec = document.getElementById('titolo')

let seconds = 30;

const clock = setInterval(function(){
    if(seconds === 0 ){
        clearInterval(clock);
        console.log('tempo scaduto')
        
    }else {
        sec.innerHTML += seconds;
        console.log(seconds);
        sec.innerHTML = seconds;
        seconds--;   
    }
}, 1000);




//creare un array di numeri random che verranno visualizati nel dom. (A)

const arrRandom = [];

for(let i = 0; i < 5; i++){
    const num = Math.floor((Math.random() * 10) + 1);
    arrRandom.push(num);
}

let impNumb = document.getElementById('imp-numb');
impNumb.innerHTML = arrRandom;
console.log(arrRandom)






