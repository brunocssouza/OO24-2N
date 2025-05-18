import { BaralhoUno } from "./BaralhoUno";
import { Carta } from "./Carta";

export abstract class Jogador {
    protected mao:Carta[] = [];
    nome:string = "";

    constructor(nome:string) {
        this.nome = nome
    }

    receberCarta(baralho:BaralhoUno, setup:boolean = false): void {
        console.log(`${this.nome} recebeu uma carta.`)
        if (!setup) {
            if (this.nome != "Computador") {
                console.table(baralho.ultimo())
            }
        }
        this.mao.push(baralho.ultimo())
        baralho.removerDoFinal()
    }

    jogarCarta(index: number): [Carta, number] {
        console.log(`${this.nome} jogou ${this.mao[index].getCor()} | ${this.mao[index].getValor()}`)
        const carta = this.mao[index]
        return [carta, index]
    }

    getNome(): string {
        return this.nome
    }
    getMao(): Carta[] {
        return this.mao
    }
}
