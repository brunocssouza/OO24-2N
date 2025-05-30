import { Relacionavel } from "./Relacionavel";

export class Pessoa implements Relacionavel {
    private nome:string;
    private sobrenome:string;
    private dataNascimento:string;
    private genero:string;
    private outrasRelacoes:Relacionavel[] = []

    constructor(nome:string, sobrenome:string, dataNascimento:string, genero:string) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataNascimento = dataNascimento
        this.genero = genero
    }
    
    descreverRelacao(): string {
        return ""
    }
}