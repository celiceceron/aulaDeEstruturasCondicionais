/* Par ou ímpar.
Vamos criar um código para receber um numero e se ele for
par mostra no console a mensagem "O número X é par",
e caso o número seja ímpar, mostra a mensagem 
"O número é ímpar"
*/

const numero = 2;
const ehPar = numero % 2 ==0;

if (ehPar){
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}