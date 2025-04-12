export class Feitico {
    private nome:string;
    private poderBase:number;

    constructor(nomeRecebido:string, poderBaseRecebido:number) {
        this.nome = nomeRecebido
        this.poderBase = poderBaseRecebido
    }

    lançar() {
        console.log(`O feitiço ${this.nome} de ${this.poderBase} foi lançado!`)
    }
}