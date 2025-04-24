export class LugaresMágicos {
    private nome:string;
    private andares:number;
    private desafios:string[]
    private static lugares:LugaresMágicos[] = []

    constructor(nomeRecebido:string, andaresRecebidos:number, desafiosRecebidos:string[]) {
        this.nome = nomeRecebido
        this.andares = andaresRecebidos
        this.desafios = desafiosRecebidos
        LugaresMágicos.lugares.push(this)
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


    static getAll():LugaresMágicos[] {
        return LugaresMágicos.lugares
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


const lugaresmagicos1:LugaresMágicos = new LugaresMágicos("Floresta Negra", 0, ["Aranhas"]);
const lugaresmagicos2:LugaresMágicos = new LugaresMágicos("Castelo de Hogwarts", 7, ["Câmara Secreta"]);
const lugaresmagicos3:LugaresMágicos = new LugaresMágicos("Banco Gringotes", 713, ["Dragão"]);
