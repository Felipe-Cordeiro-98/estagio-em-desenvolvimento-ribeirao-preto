/*

1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

*/

const numero = 8; // número de entrada

let fibonacci = [0, 1];

for (let i = 1; i < fibonacci.length; i++) {
    let pertenceAhSequencia = fibonacci.includes(numero);

    if (pertenceAhSequencia) {
        console.log("O número informado pertence a sequência de fibonacci");
        break;
    } else {
        let sequencia = fibonacci[i - 1] + fibonacci[i];
        fibonacci.push(sequencia);
    }

    if (fibonacci[i] > numero) {
        console.log("O número não pertence a sequência de fibonacci");
        break;
    }
}
