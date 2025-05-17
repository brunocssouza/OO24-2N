import { Carta } from "./Carta";
import { Decks } from "./Decks";

export class BaralhoUno extends Decks<Carta> {
    private cartas:Decks<Carta> = new Decks<Carta>();

    criarBaralho(): void {
        this.cartas.limpar()
        for (let i=0; i <= 108; i++) {
            this.getCartas().adicionarNoFinal(new Carta());
        }
    }

    embaralhar(): void {
        let cartasEmbaralhadas = this.cartas.getElementos();
        for (let i = cartasEmbaralhadas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartasEmbaralhadas[i], cartasEmbaralhadas[j]] = [cartasEmbaralhadas[j], cartasEmbaralhadas[i]];
        }
        this.cartas.setElementos(cartasEmbaralhadas);
    }

    comprarCarta(): Carta | undefined {
        return this.cartas.removerDoFinal();
    }

    getCartas():Decks<Carta>{
        return this.cartas;
    }
}
