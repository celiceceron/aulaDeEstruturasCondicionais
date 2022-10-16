/* Site de poker. Conteudo adulto, quando carregamos a pagina
nóss verificamos a idade do usuário logado e se essa idade
for menos de 18 anos nós mostramos a mensagem: 
Conteúdo proibido para menores.
Dados dos usuários:
Nome: "Pedro"
Data de nasscimento: 2010
*/


function obterAnoAtual(){
    const dataAtual = new Date();
    return dataAtual.getFullYear();
}

const nome = "Pedro";
const anoNascimento = 2010;
const anoAtual = obterAnoAtual();
const idade = anoAtual - anoNascimento

if(idade >=18){
    console.log("Pode jogar!");
} else{
    console.log("Acessso proibido!");
}

console.log();