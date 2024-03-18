"use strict"

// 01

if (true) {
  let nome = "Barbara"
}

console.log(nome); // nome is not defined


// 02

function infoIdade() {
  let idade = 30;
  if(true) {
    console.log("Dentro do IF do teste: " + idade); // funciona
  }
  console.log("Fora do IF do teste: " + idade); // funciona
}

infoIdade();
console.log("Fora de teste: " + idade); // idade is not defined