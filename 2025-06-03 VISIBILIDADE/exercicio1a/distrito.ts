export class Distrito {
    private nome: string;
    private recursos: string[];
    private populacao: number;

    constructor(nomeRecebido: string, recursosRecebidos: string[], populacaoRecebida: number) {
        this.nome = nomeRecebido;
        this.recursos = recursosRecebidos;
        this.populacao = populacaoRecebida;
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