"use strict"

// 01

if (true) {
  let nome = "Barbara"
}

console.log(nome);


// 02

function infoIdade() {
  let idade = 30;
  if(true) {
    console.log("Dentro do IF do teste: " + idade);
  }
  console.log("Fora do IF do teste: " + idade);
}

infoIdade();
console.log("Fora de teste: " + idade);