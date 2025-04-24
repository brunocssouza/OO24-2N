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
