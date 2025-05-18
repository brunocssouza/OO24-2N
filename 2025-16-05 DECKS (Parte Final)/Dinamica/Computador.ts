import { Jogador } from "./Jogador";

export class Computador extends Jogador {
    nome:string = "Computador"

    jogar(): void {
        console.log("==================================")
        const indexSelecionado = Math.floor(Math.random() * this.mao.length)
        this.jogarCarta(indexSelecionado)
    }
}