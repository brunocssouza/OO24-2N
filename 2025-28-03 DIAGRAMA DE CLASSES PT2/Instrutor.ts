import { Usuario } from "./Usuario";

export class Instrutor extends Usuario {
    private especialidade:string
    private cref:string

    constructor(nomeRecebido:string, emailRecebido:string, especialidadeRecebida:string, crefRecebido:string) {
        super(nomeRecebido, emailRecebido)
        this.especialidade = especialidadeRecebida
        this.cref = crefRecebido
    }
}