import { Feitico } from "./Feitico";
import { Grimorio } from "./Grimorio";

export class Diretor implements Grimorio {
    private nome:string

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    getNome():string {
        return this.nome
    }

    consultarFeitiço(nomeFeitiçoRecebido: string):void {
        for (let feitico of Feitico.feiticos) {
            if (feitico.getNome().toLowerCase().trim() == nomeFeitiçoRecebido.toLowerCase().trim()) {
                console.log("[✔] Feitiço encontrado:")
                console.log(`Nome: ${feitico.getNome()}`)
                console.log(`Dano: ${feitico.getDano()}`)
                console.log(`Descrição: ${feitico.getDescricao()}`)

            } else {
                console.log("[✗] Feitiço inserido não encontrado.")
            }
        }
    }
}