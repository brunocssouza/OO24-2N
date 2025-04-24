import { CriaturaMagica } from "./CriaturaMagica";

export class Fênix extends CriaturaMagica {
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
const fenix1:Fênix = new Fênix("Fawkes", 300, "Voador", "Aparatar lançando labaredas de fogo", Math.floor(Math.random() * 200)+1)