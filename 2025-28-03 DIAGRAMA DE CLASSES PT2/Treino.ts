import { Aluno } from "./Aluno"
import { Exercicio } from "./Exercicio"
import { Instrutor } from "./Instrutor"

export class Treino {
    private aluno:Aluno
    private instrutor:Instrutor
    private exercicios:Exercicio

    constructor(alunoRecebido:Aluno, instrutorRecebido:Instrutor, exerciciosRecebidos:Exercicio) {
        this.aluno = alunoRecebido
        this.instrutor = instrutorRecebido
        this.exercicios = exerciciosRecebidos
    }

    getAluno():Aluno {
        return this.aluno
    }
}