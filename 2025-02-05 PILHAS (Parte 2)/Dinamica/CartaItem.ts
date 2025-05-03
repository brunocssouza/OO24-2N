import { Carta } from "./Carta"

class CartaItem extends Carta {
    private efeito:string
    
    constructor(nome:string, tipo:string, efeito:string) {
        super(nome, tipo)
        this.efeito = efeito
    }
}