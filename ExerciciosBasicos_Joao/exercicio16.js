//Programa que identifica quantas letras possuem as palavras digitadas pelo usuário
for (let i = 1; i <= 3; i++) {
    const entrada = prompt(`Digite o ${i}ª nome: `);
    const nome = String(entrada)
    const tamanho = nome.length;
    console.log(tamanho)
}
