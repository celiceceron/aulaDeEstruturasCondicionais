/* Vamos escrever um algoritmo que seja capaz de dar
bom dia, boa tarde ou boa noite a partir da hora informada.
*/

//const data = new Date ("August 3, 2020 06:15:00");
const data = new Date("August 3, 2020 15:15:00");

const hora = data.getHours();

if (hora < 12){
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}
