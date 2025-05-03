import { Carta } from "./Carta";

class Baralho {
    private deck:Carta[];

    constructor(deck:Carta[]) {
        this.deck = deck
    }

    public getDeck() {
        return this.deck
    }

    public embaralhar() {
        let array = this.deck
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

}