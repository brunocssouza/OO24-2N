export class Feitico {

    private nome:string;
    private descricao:string;
    private poderBase:number;
    public static feiticos:Feitico[] = []

    constructor(nomeRecebido:string, descricaoRecebida:string, poderBaseRecebido:number) {
        this.nome = nomeRecebido
        this.descricao = descricaoRecebida
        this.poderBase = poderBaseRecebido
        Feitico.feiticos.push(this)
    }

    getNome():string {
        return this.nome
    }

    getDescricao():string {
        return this.descricao
    }

    getDano():number {
        return this.poderBase
    }

    lançar() {
        console.log(`O feitiço ${this.nome} (${this.poderBase}) foi lançado!`)
    }


}