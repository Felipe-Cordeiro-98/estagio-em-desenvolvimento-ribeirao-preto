/*

2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

*/

const string = "Abelha";
const letra = "a";

let quantidade = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letra.toLowerCase()) {
        quantidade++;
    }
}

let vezOuVezes = quantidade === 1 ? "vez" : "vezes";

if (quantidade === 0) {
    console.log(`Na string informada não existe a letra "${letra}"`);
} else {
    console.log(`A letra "${letra}" se repete ${quantidade} ${vezOuVezes}`);
}
