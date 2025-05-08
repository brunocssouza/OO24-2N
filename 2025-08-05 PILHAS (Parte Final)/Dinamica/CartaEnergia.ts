import { Carta } from "./Carta"

export class CartaEnergia extends Carta {
    private valor:number
    
    constructor(nome:string, tipo:string, valor:number) {
        super(nome, tipo)
        this.valor = valor
    }
}