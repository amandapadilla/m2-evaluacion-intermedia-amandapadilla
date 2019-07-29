"use strict";

let randomNumber = getRandomNumber;
let inputNumber = document.getElementById("inputNumber");
const compareInputSubmit = document.querySelector("inputSubmit");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

if (inputNumber = randomNumber){
    answerResult.innerHTML="¡ACERTASTE! Has ganado, campeona.";
} else if (inputNumber < randomNumber) {
    answerResult.innerHTML="Ooh...demasiado BAJO. Prueba otra vez.";
} else (inputNumber > randomNumber) {
    answerResult.innerHTML="Ooh...demasiado ALTO. Prueba otra vez.";
}

//Falta el evento para realizar la comparación. No se ha completado por falta de tiempo.

//Falta programar el bucle del contador, por falta de tiempo. Sería algo así: 
// for (let i=1; i<101; i++){
 //   counterNumber.innerHTML = (number + i);
//}