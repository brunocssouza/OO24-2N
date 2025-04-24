import { Guardiao } from "./CriaturaMagicaGuardiao"

export class Reptil extends Guardiao {
    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string, danoRecebido:number, segredoRecebido:string) {
        super(nomeRecebido, hpRecebido, tipoRecebido, poderRecebido, danoRecebido, segredoRecebido)
        Guardiao.guardioes.push(this)
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
const basilisco:Reptil = new Reptil("Basilisco", 700, "Cobra", "Petrificar", Math.floor(Math.random() * 600)+200, "A câmara secreta");