import { Aluno } from "./Aluno"
import { Misc } from "./Misc"

export class Avaliacao {
    private aluno:Aluno
    private data:number
    private peso:number
    private altura:number
    private imc:number
    private observacoes:string

    constructor(alunoRecebido:Aluno, dataRecebida:string, pesoRecebido:number, alturaRecebida:number, imcRecebido:number, observacoesRecebidas:string) {
        this.aluno = alunoRecebido
        this.data = Misc.inverterData(dataRecebida)
        this.peso = pesoRecebido
        this.altura = alturaRecebida
        this.imc = imcRecebido
        this.observacoes = observacoesRecebidas
        this.imc = pesoRecebido/Math.pow(alturaRecebida, 2)
    }

    calcularIMC():number {
        return this.imc
    }

    gerarRelatorio():string {
        return `Aluno: ${this.aluno} | Data: ${this.data} | Peso: ${this.peso} | Altura: ${this.altura} | IMC: ${this.calcularIMC} | Observações: ${this.observacoes}`
    }
}