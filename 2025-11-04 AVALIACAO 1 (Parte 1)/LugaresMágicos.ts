export class LugaresMágicos {
    private nome:string;
    private andares:number;
    private desafios:string[]

    constructor(nomeRecebido:string, andaresRecebidos:number, desafiosRecebidos:string[]) {
        this.nome = nomeRecebido
        this.andares = andaresRecebidos
        this.desafios = desafiosRecebidos
    }

    setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido
    }
    setAndares(anadaresRecebidos:number):void {
        this.andares = anadaresRecebidos
    }
    setDesafios(desafiosRecebidos:string[]):void {
        this.desafios = desafiosRecebidos
    }

    getNome():string {
        return this.nome
    }
    getAndares():number {
        return this.andares
    }
    getDesafios():string[] {
        return this.desafios
    } 
}
