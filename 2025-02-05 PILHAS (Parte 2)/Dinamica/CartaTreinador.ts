import { Carta } from "./Carta"

class CartaTreinador extends Carta {
    private descricao:string
    
    constructor(nome:string, tipo:string, descricao:string) {
        super(nome, tipo)
        this.descricao = descricao
    }
}