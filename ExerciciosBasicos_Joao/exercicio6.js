//Programa que identifica se o número digitado é par ou ímpar
const entrada = prompt("Digite um número: ");
const num = Number(entrada)

if(num % 2 === 0){
    console.log("O número", num, "é par!")
}else{
    console.log("O número", num, "é ímpar!")
}