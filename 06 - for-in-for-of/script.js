// For padrão

let numOne = [10, 20, 30, 40, 50]

for (let i = 0; i < numOne.lenght; i++) {
  console.log(i) // retorna a posição do array -> 0, 1, 2...
  console.log(numOne[i]) // retorna o valor -> 10, 20, 30...
}

// For IN

let numTwo = [10, 20, 30, 40, 50]

for (n in numTwo) {
  console.log(n) // retorna a posição do array -> 0, 1, 2...
  console.log(numTwo[i]) // retorna o valor -> 10, 20, 30...
}

// For OF

let numThree = [10, 20, 30, 40, 50]

for (n of numThree) {
  console.log(n) // retorna diretamente o valor -> 10, 20, 30...
}

// O FOR IN funciona igual o FOR padrão e o FOR OF retorna todos
// os valores ao ser diretamente chamada a variável (n).