import { PersonagemTemporal } from "./PersonagemTemporal";

class FilaTemporal {
    private personagens:PersonagemTemporal[] = []

    estaVazia(): boolean {
        return this.personagens.length == 0;
    }
    
    enfileirar(personagem:PersonagemTemporal): void {
        personagem.setAssinaturaTemporal(this.personagens.length+1)
        this.personagens.push(personagem)
        console.log(`${personagem.getNome()} (${personagem.getUniverso()}) foi adicionado!`)
    }

    desenfileirar(): PersonagemTemporal | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined
        }
        console.log(`${this.personagens[0].getNome()} (${this.personagens[0].getUniverso()}) foi removido.`)
        return this.personagens.shift();
    }

    primeiroDaFila():PersonagemTemporal | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined;
        }
        return this.personagens[0];
    }

    tamanho(): number {
        return this.personagens.length
    }

    exibirFila(): void {
        console.table(this.personagens)
    }
}

const homemAranha1 = new PersonagemTemporal("Homem-Aranha", "Universo 423")
const homemAranha2 = new PersonagemTemporal("Homem-Aranha", "Universo 616")
const capitaoAmerica = new PersonagemTemporal("Capitão América", "Universo 138")
const panteraNegra1 = new PersonagemTemporal("Pantera Negra", "Universo 1610")
const panteraNegra2 = new PersonagemTemporal("Pantera Negra", "Universo 43")
const surfistaPrateado = new PersonagemTemporal("Surfista Prateado", "Universo 928")

const filaTemporal:FilaTemporal = new FilaTemporal();
filaTemporal.enfileirar(homemAranha1)
filaTemporal.enfileirar(homemAranha2)
filaTemporal.enfileirar(capitaoAmerica)
filaTemporal.enfileirar(panteraNegra1)
filaTemporal.enfileirar(panteraNegra2)
filaTemporal.enfileirar(surfistaPrateado)
filaTemporal.desenfileirar();
filaTemporal.desenfileirar();
filaTemporal.exibirFila();
