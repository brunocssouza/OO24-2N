import { CriaturaMagica } from "./CriaturaMagica";

export class Unicórnio extends CriaturaMagica {
    private dano:number

    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string, danoRecebido:number) {
        super(nomeRecebido, hpRecebido, tipoRecebido, poderRecebido)
        this.dano = danoRecebido
    }

    getDano():number {
        return this.dano
    }

    usarMagia():number {
        console.log(`${this.nome} começou a ${this.poder.toLowerCase()}.`)
        return this.dano
    }
}

// Instâncias
const unicornio1:Unicórnio = new Unicórnio("Unicorn", 80, "Terrestre", "Investir enorme força", Math.floor(Math.random() * 200)+1);