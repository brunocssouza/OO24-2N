import { Baralho } from "./Baralho"
import { Carta } from "./Carta"

export class Tabuleiro {
    private cartasDescarte: Carta[] = []
    private cartasPrincipal: Baralho

    constructor(cartasPrincipal:Baralho) {
        this.cartasPrincipal = cartasPrincipal
    }

    public adicionarCartaMao() {
        const cartaComprada = this.cartasPrincipal.comprarCarta();
        console.log(cartaComprada?.getNome() + " foi comprada!")
    }

    public descartarCarta(cartaPokemon: Carta): void {
        this.cartasDescarte.push(cartaPokemon)
        console.log(`${cartaPokemon.getNome()} foi descartado.`)
    }

    public exibirMao() {
        console.log(this.cartasPrincipal.getCartas())
    }

    public exibirDescarte() {
        console.log(this.cartasDescarte)
    }
}
