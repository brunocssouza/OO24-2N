import { Aluno } from "./Aluno";

export class Presenca {
    private aluno:Aluno
    private data:number

    constructor(alunoRecebido:Aluno, dataRecebida:number) {
        this.aluno = alunoRecebido
        this.data = dataRecebida
    }

    getAluno():Aluno {
        return this.aluno
    }

    getData():number {
        return this.data
    }
    
}