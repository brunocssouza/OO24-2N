import { Feitico } from "./Feitico"

export abstract class CriaturaMagica {
    protected nome:string
    protected tipo:string               // Exemplo: Voador, Pássaro...
    protected poder:string              // Se for Bruxo, deixar nulo. Caso contrário, segue um exemplo: Soltar fogo.

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string) {
        this.nome = nomeRecebido
        this.tipo = tipoRecebido
        this.poder = poderRecebido  
    }

    getNome():string {
        return this.nome
    }
    getTipo():string {
        return this.tipo
    }
    getPoder():string {
        return this.poder
    }

    abstract usarMagia(magiaRecebida:Feitico|string):number;    // Se bruxo, esse método usará o lancarFeitiço() da classe Bruxo.
                                                                // Caso contrário, usar o poder recebido.
}
