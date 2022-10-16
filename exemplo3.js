/* Criar um  jogo de computador com a função 'jogar' que recebe um
número entre 1 e 6 escolhido pelo jogador.
Dentro dessa função o computador  vai gerar um número
aleatório entre 1  e  6 (como se jogassemoms um dado),
se o número que o jogador escolheu for o número sorteado
será exibida a mensagem "Você ganhou!", caso contrário
será exibida a mensagem "Tente outra vez!".
*/

function jogar(numero){
    const numeroSorteado = Math.floor(Math.random()*6) + 1;

    console.log(numero, numeroSorteado);

    if(numero == numeroSorteado){
    console.log("Você ganhou!!!");
    } else {
    console.log("Tente outra vez :(");
    }
}

jogar(1);
jogar(1);
jogar(1);
jogar(1);
jogar(1);
jogar(1);
