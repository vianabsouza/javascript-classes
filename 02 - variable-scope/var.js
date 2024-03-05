"use strict"

//01

if (true) {
  var nome = "Barbara"
}

console.log(nome);

// 02

function infoIdade() {
  var idade = 30;
  if(true) {
    console.log("Dentro do IF do teste: " + idade);
  }
  console.log("Fora do IF do teste: " + idade);
}

infoIdade();
console.log("Fora de teste: " + idade);

// 03

function infoIdade() {
  if(true) {
    var idade = 30;
    console.log("Dentro do IF do teste: " + idade);
  }
  console.log("Fora do IF do teste: " + idade);
}

infoIdade();
console.log("Fora de teste: " + idade);
