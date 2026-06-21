//Programa que identifica o maior número entre 5 valores digitados pelo usuário
let maiorNum;
for (let i = 1; i <= 5; i++) {
    let entrada = prompt(`Digite o ${i}º número: `);
    const numeros = Number(entrada);
    if(i === 1 | numeros > maiorNum){
        maiorNum = numeros;
}
}

console.log(`O maior número digitado foi: ${maiorNum}`)