//Programa que calcula qual pessoa é mais velha com as idades digitadas
const entrada = prompt("Digite a idade da 1º pessoa: ");
const entrada2 = prompt("Digite a idade da 2º pessoa: ");
const idade = Number(entrada);
const idade2 = Number(entrada2);

if(idade > idade2){
    console.log("A primeira pessoa é mais velha");
}else if(idade < idade2){
    console.log("A segunda pessoa é mais velha");
}else{
    console.log("As idades são iguais")
}