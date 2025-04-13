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

    consultarFeitiço(nomeFeitiçoRecebido:string):void {
        let feitiçoEncontrado:Feitico|null = null;
        for (let feitico of Feitico.feiticos) {
            if (feitico.getNome().toLowerCase().trim() == nomeFeitiçoRecebido.toLowerCase().trim()) {
                console.log("[✔] Feitiço encontrado:")
                feitiçoEncontrado = feitico
                break
            }
        }
        if (!feitiçoEncontrado) {
            console.log("[✗] Feitiço inserido não encontrado.")
        } else {
            return feitiçoEncontrado.mostrarDescricao()
        }
        
    }
}