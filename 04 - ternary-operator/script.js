let num = 10;
result = (!(num % 2) ? "Par" : "Impar")

// Aqui possui uma pegadinha no retorno do ternário. O resultado para "Par" deve ser 0,
// porém 0 é considerado false, havendo a necessidade de utilizar o NOT (!) na operação.