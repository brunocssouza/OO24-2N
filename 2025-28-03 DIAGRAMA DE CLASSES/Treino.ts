import { Aluno } from "./Aluno"
import { Exercicio } from "./Exercicio"
import { Instrutor } from "./Instrutor"
import { Misc } from "./Misc"

export class Treino {
    private aluno:Aluno
    private instrutor:Instrutor
    private exercicios:Exercicio[]
    private data!:number

    constructor(alunoRecebido:Aluno, instrutorRecebido:Instrutor, exerciciosRecebidos:Exercicio[], dataRecebida:string) {
        this.aluno = alunoRecebido
        this.instrutor = instrutorRecebido
        this.exercicios = exerciciosRecebidos
        
        const dataRecebidaInvertida:number = Misc.inverterData(dataRecebida)
        if (this.aluno.getDataInscricao() < dataRecebidaInvertida) {
            this.aluno.marcarPresenca(dataRecebidaInvertida)
            this.data = dataRecebidaInvertida

        } else {
            console.log("[Treino: ERRO] Data inserida é anterior á data de inscrição do aluno!")
            return 
        }
    }

    getInstrutor():Instrutor {
        return this.instrutor
    }

    getExercicios():Exercicio[] {
        return this.exercicios
    }

    getData():string {
        return Misc.formatarData(this.data)
    }
}