import { LugaresMágicos } from "./LugaresMágicos";

const rs = require("readline-sync")

export function explorarHogwartsIntro() {
    while (true) {
        console.clear()
        console.log("================== EXPLORAR HOGWARTS ==================")

        const lugares = LugaresMágicos.getAll()
        for (let i=0; i < lugares.length; i++) {
            const lugar = lugares[i]
            console.log(`${i+1}. ${lugar.getNome()}`)
        }
        console.log("0. Voltar ao Menu Principal")

        const opcao = rs.questionInt("\nEscolha um lugar magico para explorar: ")
        if (opcao == 0) { 
            return 

        } else if (opcao >= 1 && opcao <= lugares.length) {
            explorarHogwarts(lugares[opcao-1])
        }
    }
}

function explorarHogwarts(lugarRecebido:LugaresMágicos) {
    console.log("==================== Informações ====================")
    console.log(`Nome: ${lugarRecebido.getNome()}`)
    if (lugarRecebido.getAndares() > 0) {
        console.log(`Andares: ${lugarRecebido.getAndares()}`)
    }
    console.log(`Possíveis desafios: ${lugarRecebido.getDesafios()}`)

    rs.question("\nPressione Enter para voltar...")
}
