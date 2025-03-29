import { Aluno } from "./Aluno"
import { Exercicio } from "./Exercicio"
import { Instrutor } from "./Instrutor"

export class Treino {
    private aluno:Aluno
    private instrutor:Instrutor
    private exercicios:Exercicio[]
    private data:number

    constructor(alunoRecebido:Aluno, instrutorRecebido:Instrutor, exerciciosRecebidos:Exercicio[], dataRecebida:number) {
        this.aluno = alunoRecebido
        this.instrutor = instrutorRecebido
        this.exercicios = exerciciosRecebidos
        this.data = dataRecebida
    }

    getAluno():Aluno {
        return this.aluno
    }
}