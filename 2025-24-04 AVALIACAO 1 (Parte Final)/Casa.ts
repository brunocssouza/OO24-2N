import { CriaturaMagica } from "./CriaturaMagica";

export class Casa {
    private nome:string
    private membros:CriaturaMagica[] = []
    private static casas:Casa[] = []

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
        Casa.casas.push(this)
    }

    static getAll():Casa[] {
        return Casa.casas
    }
    getNome():string {
        return this.nome
    }
    getMembros():CriaturaMagica[] {
        return this.membros
    }

    setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido
    }
    setMembros(membrosRecebidos:CriaturaMagica[]):void {
        this.membros = membrosRecebidos
    }

    adicionarMembro(membroRecebido:CriaturaMagica):void {
        this.membros.push(membroRecebido)
    }
    removerMembro(membroRecebido:CriaturaMagica):void {
        for (let i:number=0; i < this.membros.length; i++) {
            if (this.membros[i] == membroRecebido) {
                this.membros.splice(i, 1)
            }
        }
    }
}

// Instâncias
const grifinoria:Casa = new Casa("Grifinória")
const sonserina:Casa = new Casa("Sonserina")
const corvinal:Casa = new Casa("Corvinal")
const lufaLufa:Casa = new Casa("Lufa-Lufa")

// Verificando e adicionando membros em suas respectivas casas conforme o atributo 'Casa' de cada Bruxo.
import { Bruxo } from "./CriaturaMagicaBruxo";
for (let bruxo of Bruxo.getAll()) {
    if (bruxo instanceof Bruxo) {
        if (bruxo.getCasa() == grifinoria) {
            grifinoria.adicionarMembro(bruxo)
        } else if(bruxo.getCasa() == sonserina) {
            sonserina.adicionarMembro(bruxo)
        } else if(bruxo.getCasa() == corvinal) {
            corvinal.adicionarMembro(bruxo)
        } else if(bruxo.getCasa() == lufaLufa) {
            lufaLufa.adicionarMembro(bruxo)
        }
    }
}
