import { Relacionavel } from "./Relacionavel";

export class Pessoa implements Relacionavel {
    private nome:string;
    private outrasRelacoes:[Relacionavel | null, Relacionavel | null];

    constructor(nome:string, relacoes:[Relacionavel | null, Relacionavel | null]) {
        this.nome = nome;
        this.outrasRelacoes = relacoes
    }

    descreverRelacao(): string {
        return `É conhecido de: ${this.getRelacoes()}`
    }
    adicionarRelacao(pessoa:Relacionavel):void {
        this.outrasRelacoes.push(pessoa)
    }
    listarRelacoes():void {
        console.table(this.outrasRelacoes)
    }

    getNome(): string {
        return this.nome
    }
    getRelacoes(): [Relacionavel | null, Relacionavel | null] {
        return this.outrasRelacoes
    }

}