export class Feitico {

    private nome:string;
    private efeito:string;
    private poderBase:number;
    public static feiticos:Feitico[] = []

    constructor(nomeRecebido:string, efeitoRecebido:string, poderBaseRecebido:number) {
        this.nome = nomeRecebido
        this.efeito = efeitoRecebido
        this.poderBase = poderBaseRecebido
        Feitico.feiticos.push(this)
    }

    getNome():string {
        return this.nome
    }

    getEfeito():string {
        return this.efeito
    }

    getDano():number {
        return this.poderBase
    }

    mostrarDescricao():void {
        console.log("=============== DESCRIÇÃO DE FEITIÇO ===============")
        console.log(`Nome: ${this.nome} \nDano: ${this.poderBase} \nEfeito: ${this.efeito}`)
        console.log("====================================================\n")
    }

    lançar():void {
        console.log(`O feitiço ${this.nome} (${this.poderBase}) foi lançado!`)
    }


}