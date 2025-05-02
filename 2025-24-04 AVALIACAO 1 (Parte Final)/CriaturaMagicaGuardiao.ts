import { CriaturaMagica } from "./CriaturaMagica";

export abstract class Guardiao extends CriaturaMagica {
    protected dano:number
    protected segredo:string
    public static guardioes:Guardiao[] =  []

    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string, danoRecebido:number, segredoRecebido:string) {
        super(nomeRecebido, hpRecebido, tipoRecebido, poderRecebido)
        this.dano = danoRecebido
        this.segredo = segredoRecebido
        Guardiao.guardioes.push(this)
    }

    public getAll():Guardiao[] {
        return Guardiao.guardioes
    }
    
    abstract protegerSegredo():void
}
