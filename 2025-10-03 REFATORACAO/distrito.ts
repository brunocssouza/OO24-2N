export class Distrito {
    private nome: string;
    private recursos: string[];
    private populacao: number;

constructor(nome: string, recursos: string[], populacao: number) {
    this.nome = nome;
    this.recursos = recursos;
    this.populacao = populacao;
}

public setNome(nomeRecebido: string): void {
    this.nome = nomeRecebido;
}

public setRecursos(recursosRecebidos: string[]): void {
    this.recursos = recursosRecebidos;
}

public setPopulacao(populacaoRecebida: number): void {
    this.populacao = populacaoRecebida;
}

public getNome(): string {
    return this.nome;
}

public getRecursos(): string[] {
    return this.recursos;
}

public getPopulacao(): number {
    return this.populacao;
}

}