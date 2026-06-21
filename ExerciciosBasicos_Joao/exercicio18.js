//Programa que recebe 5 valores e exibe a soma de todos
let total = 0;
for (let i = 1; i <= 5; i++) {
    const entrada = prompt(`Digite o ${i}º número: `);
    const num = Number(entrada);
    total = total + num;
}

console.log("O soma total dos valores digitados é:", total);


