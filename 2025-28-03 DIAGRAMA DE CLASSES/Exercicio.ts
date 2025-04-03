export class Exercicio {
    private nome:string
    private series:number
    private repeticoes:number

    constructor(nomeRecebido:string, seriesRecebidas:number, repeticoesRecebidas:number) {
        this.nome = nomeRecebido
        this.series = seriesRecebidas
        this.repeticoes = repeticoesRecebidas
    }

    getNome():string {
        return this.nome
    }

    getSeries():number {
        return this.series
    }

    getRepeticoes():number {
        return this.repeticoes
    }
    
}