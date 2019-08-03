"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
} //función para crear el número random

const handleForm = function(ev) {
  ev.preventDefault();
  //const inputValue = getInputValue ();
  if (getInputValue() === myRandomNumber) {
    feedback.innerHTML = 'Has ganado, campeona';
  } else if (getInputValue () > myRandomNumber){
    feedback.innerHTML = 'Demasiado alto';
  } else (getInputValue () < myRandomNumber){
    feedback.innerHTML = 'Demasiado bajo';
  }
  counterNumber++;
  counter.innerHTML = counterNumber;
}; // Función del evento onclick

const getInputValue = function() {
  return parseInt(inputNumber.value);
};

const myRandomNumber = getRandomNumber(100);
const form = document.querySelector(".js-guessNumber");
const inputNumber = document.querySelector(".js-inputNumber");
const feedback = document.querySelector(".js-answerResult");
const counter = document.querySelector(".js-counterNumber");
let counterNumber = 0;

form.addEventListener("click", handleform);//Listener y Handler del evento onclick
