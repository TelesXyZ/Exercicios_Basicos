//Programa que identifica se as duas palavras digitadas são iguais ou diferentes
const entrada = prompt("Digite uma palavra: ");
const entrada2 = prompt("Digite outra palavra: ");
const str = String(entrada);
const str2 = String(entrada2);

if(str === str2){
    console.log("As strings são iguais!");
}else{
    console.log("As strings são diferentes!");
}