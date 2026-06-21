//Programa que calcula a média dos 3 números digitados pelo usuário
const entrada = prompt("Digite o 1º número: ");
const entrada2 = prompt("Digite o 2º número: ");
const entrada3 = prompt("Digite o 3º número: ");
const num = Number(entrada);
const num2 = Number(entrada2);
const num3 = Number(entrada3);

const media = (num + num2 + num3) / 3;

console.log("O media entre", num, ",", num2, ",", num3,"é igual a: ", media)
