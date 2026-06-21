//Programa que recebe 5 valores e retorna quais são pares
for (let i = 1; i <= 5; i++) {
    const entrada = prompt(`Digite o ${i}º número: `);
    const num = Number(entrada);
    let epar = false;
if(num % 2 === 0){
    epar = true;
}

if(epar){
    console.log(`O número ${num} é par`);
}
}