export class Equipamento {
    private nome:string
    private descricao:string
    private disponibilidade:boolean

    constructor(nomeRecebido:string, descricaoRecebida:string, disponibilidadeRecebida:boolean) {
        this.nome = nomeRecebido
        this.descricao = descricaoRecebida
        this.disponibilidade = disponibilidadeRecebida
    }

    verificarDisponibilidade():boolean {
        return this.disponibilidade
    }
}