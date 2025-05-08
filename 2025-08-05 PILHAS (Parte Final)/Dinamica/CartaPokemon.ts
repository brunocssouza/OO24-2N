import { Carta } from "./Carta"

export class CartaPokemon extends Carta {
    private ataque:number
    private hp:number
    
    constructor(nome:string, tipo:string, ataque:number, hp:number) {
        super(nome, tipo)
        this.ataque = ataque
        this.hp = hp
    }
}