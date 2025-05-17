import { BaralhoUno } from "./BaralhoUno";
import { Carta } from "./Carta";

const cartinhas:BaralhoUno = new BaralhoUno();
cartinhas.criarBaralho()
cartinhas.getCartas().exibir();

export abstract class Jogador {
    private mao:Carta[] = [];

    receberCarta(): Carta {
        return this.mao.push(cartinhas.getCartas().removerDoFinal())
    }
}
