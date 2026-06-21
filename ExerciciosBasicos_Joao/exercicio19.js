//Programa que recebe 5 palavras e retorna quais tem mais de 5 letras
for (let i = 1; i <= 5; i++) {
    const entrada = prompt(`Digite a ${i}ª palavra: `);
    const palavra = String(entrada)
    let emaior = false;

    if(palavra.length > 5){
    emaior = true
}

if(emaior){
    console.log(`A palavra ${palavra} tem mais de 5 letras!`);
}
}