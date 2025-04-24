import { Guardiao } from "./CriaturaMagicaGuardiao"

export class Aracnideo extends Guardiao {
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
const aragogue:Aracnideo = new Aracnideo("Aragogue", 600, "Aranha", "Envenenar", Math.floor(Math.random() * 500)+200, "Hagrid");