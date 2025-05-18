import { Carta } from "./Carta";
import { Jogador } from "./Jogador";

const rs = require('readline-sync')

export class Humano extends Jogador {

    jogar(): [Carta, number] {
        console.log("==================================")
        console.log("Você possui as seguintes cartas:")
        console.table(this.mao)
        const indexSelecionado:number = rs.questionInt("Insira o index da carta que deseja jogar: ")
        return this.jogarCarta(indexSelecionado)
    }
}