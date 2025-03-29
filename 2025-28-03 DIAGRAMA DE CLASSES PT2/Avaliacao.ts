import { Aluno } from "./Aluno"

export class Avaliacao {
    private aluno:Aluno
    private data:number
    private peso:number
    private altura:number
    private imc:number
    private observacoes:string

    constructor(alunoRecebido:Aluno, dataRecebida:number, pesoRecebido:number, alturaRecebida:number, imcRecebido:number, observacoesRecebidas:string) {
        this.aluno = alunoRecebido
        this.data = dataRecebida
        this.peso = pesoRecebido
        this.altura = alturaRecebida
        this.imc = imcRecebido
        this.observacoes = observacoesRecebidas
    }

    calcularIMC():number {
        return this.peso/Math.pow(this.altura, 2)
    }

    gerarRelatorio():string {
        return `Aluno: ${this.aluno} | Data: ${this.data} | Peso: ${this.peso} | Altura: ${this.altura} | IMC: ${this.calcularIMC} | Observações: ${this.observacoes}`
    }
}