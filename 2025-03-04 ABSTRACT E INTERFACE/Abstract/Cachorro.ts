import { Animal } from "./Animal"

class Cachorro extends Animal {

    constructor(nomeRecebido:string) {
        super(nomeRecebido)
    }

    emitirSom() {
        console.log(`${this.nome} fez Au Au!`)
    }
}

const cachorro1 = new Cachorro("Lero")
cachorro1.emitirSom()
