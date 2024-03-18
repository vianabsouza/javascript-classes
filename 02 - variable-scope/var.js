"use strict"

//01

if (true) {
  var nome = "Barbara"
}

console.log(nome); // funciona

// 02

function infoIdade() {
  var idade = 30;
  if(true) {
    console.log("Dentro do IF do teste: " + idade); // funciona
  }
  console.log("Fora do IF do teste: " + idade); // funciona
}

infoIdade();
console.log("Fora de teste: " + idade); // idade is not defined

// 03

function infoIdade() {
  if(true) {
    var idade = 30;
    console.log("Dentro do IF do teste: " + idade); // funciona
  }
  console.log("Fora do IF do teste: " + idade); // funciona
}

infoIdade();
console.log("Fora de teste: " + idade); // idade is not defined
