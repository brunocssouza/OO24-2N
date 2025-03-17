export class Animal {
    protected nome:string;
    protected idade:number;

    constructor(nomeRecebido:string, idadeRecebida:number) {
        this.nome = nomeRecebido;
        this.idade = idadeRecebida;
    }

    public fazerBarulho():void {
        console.log(`${this.nome} fez barulho!`)
    }
}
