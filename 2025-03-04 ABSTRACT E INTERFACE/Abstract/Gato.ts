import { Animal } from "./Animal"

class Gato extends Animal {

    constructor(nomeRecebido:string) {
        super(nomeRecebido)
    }

    emitirSom() {
        console.log(`${this.nome} fez Miau!`)
    }
}

const gato1 = new Gato("José")
gato1.emitirSom()