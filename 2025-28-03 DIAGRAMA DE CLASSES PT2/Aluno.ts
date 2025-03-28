import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    private idade:number
    private peso:number
    private altura:number

    constructor(nomeRecebido:string, emailRecebido:string, idadeRecebida:number, pesoRecebido:number, alturaRecebida:number) {
        super(nomeRecebido, emailRecebido)
        this.idade = idadeRecebida
        this.peso = pesoRecebido
        this.altura = alturaRecebida
    }


    getPeso():number {
        return this.peso
    }

    getAltura():number {
        return this.altura
    }


    calcularIMC():number {
        return this.peso/Math.pow(this.altura, 2)
    }

}