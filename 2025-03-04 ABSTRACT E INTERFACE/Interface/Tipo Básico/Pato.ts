import { Animal } from "./Animal";
import { Aquatico } from "./Aquatico";
import { Voador } from "./Voador";

class Pato implements Animal, Aquatico, Voador {
    nome: string;
    
    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
    }

    emitirSom(): void {
        console.log(`${this.nome} faz Quack Quack!`)
    }

    voar(): void {
        console.log(`${this.nome} está voando.`)
    }

    nadar(): void {
        console.log(`${this.nome} está nadando.`)
    }
}

const pato1 = new Pato("Queijo")
pato1.emitirSom()
pato1.voar()
pato1.nadar()