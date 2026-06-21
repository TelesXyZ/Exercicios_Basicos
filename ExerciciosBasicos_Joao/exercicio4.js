//Programa que identifica se o número digitado é positivo, negativo ou neutro
let entrada = prompt("Digite um número: ");
let num = Number(entrada);

if(num > 0){
    console.log("O número", num, "é positivo");
}else if(num == 0){
    console.log("O número", num, "é neutro");
}else{
    console.log("O número", num, "é negativo");
}