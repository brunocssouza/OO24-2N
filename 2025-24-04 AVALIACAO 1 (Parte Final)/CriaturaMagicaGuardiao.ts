import { CriaturaMagica } from "./CriaturaMagica";

export abstract class Guardiao extends CriaturaMagica {
    protected dano:number
    protected segredo:string

    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string, danoRecebido:number, segredoRecebido:string) {
        super(nomeRecebido, hpRecebido, tipoRecebido, poderRecebido)
        this.dano = danoRecebido
        this.segredo = segredoRecebido
    }

    abstract protegerSegredo():void
}
