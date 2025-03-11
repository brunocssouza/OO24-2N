export class Habilidade {
    private nome:string;

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    public setNome(nomeRecebido:string): void {
        this.nome = nomeRecebido
    }

    public getNome(): string {
        return this.nome
    }

}