// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + de 6 horas - 2000 ml
// Refrigerante/Água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem 0,5

let inputAdults = document.querySelector(".adults");
let inputChildrens = document.querySelector(".childrens");
let inputDuration = document.querySelector(".duration");

let result = document.querySelector(".result");

function calc() {
  let adults = inputAdults.value;
  let childrens = inputChildrens.value;
  let duration = inputDuration.value;
  let meatAmount =
    meatFP(duration) * adults + (meatFP(duration) / 2) * childrens;
  let beerAmount = beerFP(duration) * adults;
  let drinkAmount =
    drinkFP(duration) * adults + (drinkFP(duration) / 2) * childrens;

  result.innerHTML = `<p> Será necessário ${
    meatAmount / 1000
  } Kg de Carne </p>`;
  result.innerHTML += `<p> Será necessário ${Math.ceil(
    beerAmount / 355
  )} Latas de Cerveja </p>`;
  result.innerHTML += `<p> Será necessário ${Math.ceil(
    drinkAmount / 2000
  )} Garrafas de Bebida </p>`;
}

function meatFP(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function beerFP(duration) {
  if (duration >= 6) {
    return 200;
  } else {
    return 1200;
  }
}

function drinkFP(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
