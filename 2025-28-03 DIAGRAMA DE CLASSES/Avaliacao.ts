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
        this.observacoes = observacoesRecebidas
        this.imc = imcRecebido
    }

    calcularIMC():number {
        this.imc = Misc.arredondar2Decimais(this.peso/Math.pow(this.altura, 2))
        return this.imc
    }

    gerarRelatorio():string {
        return `Aluno: ${this.aluno.getNome()} | Data: ${Misc.formatarData(this.data)} | Peso: ${this.peso} | Altura: ${this.altura} | IMC: ${this.imc} | Observações: ${this.observacoes}`
    }
}