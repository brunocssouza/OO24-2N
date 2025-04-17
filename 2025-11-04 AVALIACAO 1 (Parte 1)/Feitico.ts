export class Feitico {
    private nome:string;
    private efeito:string;
    private poderBase:number;
    private static feiticos:Feitico[] = []

    constructor(nomeRecebido:string, efeitoRecebido:string, poderBaseRecebido:number) {
        this.nome = nomeRecebido
        this.efeito = efeitoRecebido
        this.poderBase = poderBaseRecebido
        Feitico.feiticos.push(this)
    }

    static getAll():Feitico[] {
        return Feitico.feiticos
    }

    getNome():string {
        return this.nome
    }

    getEfeito():string {
        return this.efeito
    }

    getDano():number {
        return this.poderBase
    }

    mostrarDescricao():void {
        console.log("=============== DESCRIÇÃO DE FEITIÇO ===============")
        console.log(`Nome: ${this.nome} \nDano: ${this.poderBase} \nEfeito: ${this.efeito}`)
        console.log("====================================================\n")
    }

    lançar():void {
        console.log(`O feitiço ${this.nome} foi lançado!`)
    }
}

// Instâncias
const feitiço1:Feitico = new Feitico("Expelliarmus", "Desarma o oponente", 20);
const feitiço2:Feitico = new Feitico("Stupefy", "Atordoa o oponente", 40);
const feitiço3:Feitico = new Feitico("Avada Kedavra", "Morte instantânea", 70);
const feitiço4:Feitico = new Feitico("Crucio", "Causa dor intensa", 115);
