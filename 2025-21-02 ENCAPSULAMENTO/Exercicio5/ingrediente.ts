export class Ingrediente {
    private nome!:string;
    private quantidade!:number;
    private efeito!:string;

    // Set
    setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido
        console.log('Nome do ingrediente definido!')
    };
    setQuantidade(quantidadeRecebida:number):void {
        this.quantidade = quantidadeRecebida
        console.log('Quantidade do ingrediente definido!')
    };
    setEfeito(efeitoRecebido:string):void {
        this.efeito = efeitoRecebido
        console.log('Efeito do ingrediente definido!')
    }

    // Get
    getNome():string {
        return this.nome
    };
    getQuantidade():number {
        return this.quantidade
    };
    getEfeito():string {
        return this.efeito
    };
}