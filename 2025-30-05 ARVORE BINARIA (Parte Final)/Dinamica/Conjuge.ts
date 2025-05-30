import { Pessoa } from "./Pessoa";
import { Relacionavel } from "./Relacionavel";

export class Conjuge extends Pessoa {

    constructor(nome:string, relacoes:[Relacionavel | null, Relacionavel | null]) {
        super(nome, relacoes)
    }

    descreverRelacao(): string {
        return `É casado e é conhecido de: ${this.getRelacoes()}`
    }
}