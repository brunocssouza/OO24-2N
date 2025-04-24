import { CriaturaMagica } from "./CriaturaMagica";

export abstract class Guardiao extends CriaturaMagica {
    protected dano:number
    protected segredo:string
    protected static guardioes:Guardiao[] = []

    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string, danoRecebido:number, segredoRecebido:string) {
        super(nomeRecebido, hpRecebido, tipoRecebido, poderRecebido)
        this.dano = danoRecebido
        this.segredo = segredoRecebido
    }

    static getAll():Guardiao[] {
        return this.guardioes
    }

    abstract protegerSegredo():void
}

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
const guardiao1 = new Reptil("Basilisco", 700, "Cobra", "Petrificar", Math.floor(Math.random() * 600)+200, "A câmara secreta");
const guardiao2 = new Aracnideo("Aragogue", 600, "Aranha", "Envenenar", Math.floor(Math.random() * 500)+200, "Hagrid");
