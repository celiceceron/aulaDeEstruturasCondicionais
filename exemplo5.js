/* FizzBuzz - código ensina múltiplos de 3 e 5.
Regras:
a) se for múltiplo de 3 mostra Fizz:
b) se for múltiplo de 5 Buzz:
c) se for múltiplo de 3 e 5 mostra FizzBuzz; e
d) sse for qualquer outro número, mostra o número.
*/

const numero = 4;
const ehMultiploDe3 = numero % 3 === 0;
const ehMultiploDe5 = numero % 5 === 0;

if(ehMultiploDe3 && ehMultiploDe5){
    console.log("FizzBuzz");
} else if (ehMultiploDe5) {
    console.log("Fizz");
} else if(ehMultiploDe3) {
    console.log("Buzz");
} else {
    console.log(numero);
}