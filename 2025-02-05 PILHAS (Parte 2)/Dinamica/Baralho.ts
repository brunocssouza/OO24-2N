import { Pilha } from "./Pilha";

export class Baralho {
    private cartas:Pilha;

    constructor(cartas:Pilha) {
        this.cartas = cartas
    }

    public getCartas() {
        return this.cartas
    }

    public embaralhar() {
        let array = this.cartas.getCartas()
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.cartas.setCartas(array)
    }

    public comprarCarta() {
        console.log(this.cartas.retirarTopo())
    }

    public visualizarTopo() {
        console.log(this.cartas.peek())
    }
}