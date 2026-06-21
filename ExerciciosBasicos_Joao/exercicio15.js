//Programa que exibe o dobro dos valores digitados pelo usuário
for (let i = 1; i <= 5; i++) {
    const entrada = prompt(`Digite o ${i}º número: `);
    const num = Number(entrada);
    const dobro = num * 2;
    console.log(dobro);
}
