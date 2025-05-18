import { Carta } from "./Carta";
import { Decks } from "./Decks";

export class BaralhoUno extends Decks<Carta> {
    elementos:Carta[] = [];

    criarBaralho(): void {
        this.limpar()
        for (let i=0; i <= 108; i++) {
            this.adicionarNoFinal(new Carta());
        }
    }

    embaralhar(): void {
        let cartasEmbaralhadas = this.getElementos();
        for (let i = cartasEmbaralhadas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartasEmbaralhadas[i], cartasEmbaralhadas[j]] = [cartasEmbaralhadas[j], cartasEmbaralhadas[i]];
        }
        this.setElementos(cartasEmbaralhadas);
    }

    comprarCarta(): Carta | undefined {
        return this.removerDoFinal();
    }

    getCartas():Carta[] {
        return this.elementos;
    }
}
