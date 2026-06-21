//Programa que identifica se o número digitado é primo ou não
const entrada = prompt("Digite um número: ");
const num = Number(entrada);

if(num <= 1){
    console.log("O número", num, "não é primo!");
}else{
    let eprimo = true;
for (let i = 2; i < num; i++) {
        if(num % i === 0){
            eprimo = false;
            break;
        }
    }
if(eprimo){
    console.log("O número", num, "é primo!")
}else{
    console.log("O número", num, "não é primo!");
}
}