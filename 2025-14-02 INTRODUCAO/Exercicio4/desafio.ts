// O programa deve gerar um número aleatório entre 1 e 100.
// O usuário deve tentar adivinhar o número. 
// O programa deve dar dicas se o número digitado é maior ou menor que o número aleatório. 
// O jogo termina quando o usuário acertar o número. 
// O programa deve mostrar o número de tentativas utilizadas pelo usuário.
const rs:any = require("readline-sync")

const randomInt:number = Math.floor(Math.random() * 100) + 1

let triesAmount:number = 0, userInput:number = 0;
while (userInput != randomInt) {
    console.log(`============================== ADIVINHE O NUMERO ============================== \n`)
    if (triesAmount > 0) {
        if (userInput < randomInt) {
            console.log("Oops... nao foi dessa vez. Tente um numero maior!")
        } else if (userInput > randomInt) {
            console.log("Oops... nao foi dessa vez. Tente um numero menor!")
        }
    }
    userInput = rs.questionInt("Digite um numero: ");
    triesAmount += 1;
    console.clear()
}
console.log(`============================== VOCE ACERTOU! ============================== 
O numero era: ${randomInt}.
Tentativas realizadas: ${triesAmount}.
`)
