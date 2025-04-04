export abstract class Animal {
    public nome:string

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    abstract emitirSom(): void;
}