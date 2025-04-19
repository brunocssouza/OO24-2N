import { CriaturaMagica } from "./CriaturaMagica";

export class Dragao extends CriaturaMagica {
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
const dragao1 = new Dragao("Rabo-Córneo", 120, "Voador", "Soprar um fogo devastador", Math.floor(Math.random() * 200)+1);
const dragao2 = new Dragao("Verde-Galês", 125, "Voador", "Confundir-se com a vegetação", Math.floor(Math.random() * 200)+1);
const dragao3 = new Dragao("Meteoro-Chinês", 140, "Voador", "Soprar labaredas como um meteoro", Math.floor(Math.random() * 200)+1);