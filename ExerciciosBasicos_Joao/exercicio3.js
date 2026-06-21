//Programa que identifica se o número digitado é maior, menor ou igual a 10
let entrada = prompt("Digite um número: ");
let num = Number(entrada);

if(num > 10){
    console.log("O número", num, "é maior que 10");
}else if(num == 10){
    console.log("O número", num, "é igual a 10");
}else{
    console.log("O número", num, "é menor que 10");
}
