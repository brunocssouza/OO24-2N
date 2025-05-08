export abstract class Carta {
    private nome:string;
    private tipo:string;

    constructor(nome:string, tipo:string) {
        this.nome = nome;
        this.tipo = tipo
    }

    public exibirCarta() {
        console.log("==================================")
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log("==================================")
    }

    public getNome() {
        return this.nome
    }
}