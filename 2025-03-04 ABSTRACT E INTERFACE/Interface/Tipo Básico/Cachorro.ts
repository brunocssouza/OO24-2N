import { Animal } from "./Animal";

class Cachorro implements Animal {
    nome:string;

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    emitirSom(): void {
        console.log(`${this.nome} faz Au Au!`)
    }
}

const cachorro1 = new Cachorro("Alê")
cachorro1.emitirSom()