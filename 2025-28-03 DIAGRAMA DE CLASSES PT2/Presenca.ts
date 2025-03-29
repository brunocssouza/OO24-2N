import { Aluno } from "./Aluno";

export class Presenca {
    private aluno:Aluno
    private data:number

    constructor(alunoRecebido:Aluno, dataRecebida:number) {
        this.aluno = alunoRecebido
        this.data = dataRecebida
    }

    
}