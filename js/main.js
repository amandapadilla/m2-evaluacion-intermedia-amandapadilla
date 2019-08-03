"use strict";
//crear una función para generar una número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);

//Recoger el número aleatorio y crear una variable para realizar la comparación con el input
let inputNumber = document.querySelector(".js-inputNumber");
let displayNumber = document.querySelector(".js-counterNumber");
let counterNumber = 0;
let answerResult = document.querySelector(".js-answerResult");

//Declarar función con condicional para devolver un mensaje e incrementar el contador cada vez que se introduzca un número y se haga click en submit
const handleClick = function(ev) {
  ev.preventDefault();
  if (inputNumber.value == randomNumber) {
    answerResult.innerHTML = "¡ACERTASTE! Has ganado, campeona.";
  } else if (inputNumber.value < randomNumber) {
    answerResult.innerHTML = "Ooh...demasiado BAJO. Prueba otra vez.";
  } else if (inputNumber.value > randomNumber) {
    answerResult.innerHTML = "Ooh...demasiado ALTO. Prueba otra vez.";
  } else {
    answerResult.innerHTML = "¡OHHH NOOO! Este número no es válido para jugar.";
  }
  counterNumber++;
  displayNumber.innerHTML = counterNumber;
};

const compareInputSubmit = document.querySelector(".inputSubmit");
//Llamada al evento para realizar la comparación.
compareInputSubmit.addEventListener("click", handleClick);
