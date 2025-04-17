import { CriaturaMagica } from "./CriaturaMagica";

abstract class Guardiao extends CriaturaMagica {
    abstract protegerSegredo():void
}

export class Subterraneo extends Guardiao {
    private dano:number
    private segredo:string

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string, danoRecebido:number, segredoRecebido:string) {
        super(nomeRecebido, tipoRecebido, poderRecebido)
        this.dano = danoRecebido
        this.segredo = segredoRecebido
    }

    protegerSegredo():void {
        console.log(`${this.nome} protegeu ${this.segredo.toLowerCase()}!`)
    }

    usarMagia():number {
        console.log(`${this.nome} começou a ${this.poder.toLowerCase()}.`)
        return this.dano
    }
}

// Instâncias
const guardiao1 = new Subterraneo("Basilisco", "Cobra", "Abocanhar! Nhac!", Math.floor(Math.random() * 200)+1, "A câmara secreta");