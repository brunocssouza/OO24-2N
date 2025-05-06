import { Baralho } from "./Baralho"
import { Carta } from "./Carta"

class Tabuleiro {
    private cartasDescarte: Carta[] = []
    private cartasPrincipal: Baralho

    constructor(baralho:Baralho) {
        this.cartasPrincipal = baralho
    }

    public adicionarCartaMao() {

    }

    public descartarCarta(cartaPokemon: Carta): void {
        this.cartasDescarte.push(cartaPokemon)
    }

    public exibirMao() {

    }

    public exibirDescarte() {
        console.log(this.cartasDescarte)
    }
}
