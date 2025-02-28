// Crie uma classe Mundo com um atributo que seja um array de objetos do tipo BlocoDeMadeira.

import { BlocoDeMadeira } from "./blocoDeMadeira"

class Mundo {
    private blocosDeMadeira!:BlocoDeMadeira[];

    constructor(blocosDeMadeiraRecebidos:BlocoDeMadeira[]) {
        this.blocosDeMadeira = blocosDeMadeiraRecebidos
    };

    info() {
        console.log(`Blocos de Madeira:`), console.table(this.blocosDeMadeira)
    }
}

const blocoDeMadeira1 = new BlocoDeMadeira("Carvalho", 31);
const blocoDeMadeira2 = new BlocoDeMadeira("Pinheiro", 54);

const mundo1 = new Mundo([blocoDeMadeira1, blocoDeMadeira2])
mundo1.info();
