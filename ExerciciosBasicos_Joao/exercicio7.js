//Programa que calcula o resto da soma entre dois números digitados pelo usuário
const entrada = prompt("Digite um número: ");
const entrada2 = prompt("Digite outro número: ");
const num = Number(entrada);
const num2 = Number(entrada2);

const resto = num % num2;

console.log("O resto da divisão entre ", num, "e", num2, "é igual a: ", resto)
