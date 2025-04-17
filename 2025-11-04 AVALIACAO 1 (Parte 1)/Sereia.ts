import { CriaturaMagica } from "./CriaturaMagica";

export class Sereia extends CriaturaMagica {
    
    private dano:number

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string, danoRecebido:number) {
        super(nomeRecebido, tipoRecebido, poderRecebido)
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
const sereia1 = new Sereia("Lunara das Águas Profundas", "Aquático", "Cantar hipnóticamente", Math.floor(Math.random() * 200)+1);