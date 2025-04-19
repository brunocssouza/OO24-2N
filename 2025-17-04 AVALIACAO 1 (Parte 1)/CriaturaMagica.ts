import { Feitico } from "./Feitico"

export abstract class CriaturaMagica {
    protected nome:string
    protected hp:number;
    protected tipo:string               // Exemplo: Voador, Pássaro...
    protected poder:string              // Se for Bruxo, deixar nulo. Caso contrário, segue um exemplo: Soltar fogo.
    private static criaturas:CriaturaMagica[] = []

    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string) {
        this.nome = nomeRecebido
        this.hp = hpRecebido
        this.tipo = tipoRecebido
        this.poder = poderRecebido
        CriaturaMagica.criaturas.push(this)
    }

    static getAll():CriaturaMagica[] {
        return CriaturaMagica.criaturas
    }

    getNome():string {
        return this.nome
    }
    getHP():number {
        return this.hp
    }
    getTipo():string {
        return this.tipo
    }
    getPoder():string {
        return this.poder
    }

    abstract usarMagia(feiticoRecebido?:Feitico):number;    // Se bruxo, esse método usará o lancarFeitiço() da classe Bruxo.
                                                                // Caso contrário, usar o poder recebido.
}
