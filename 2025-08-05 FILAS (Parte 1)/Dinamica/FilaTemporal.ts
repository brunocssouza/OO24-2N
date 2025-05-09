import { PersonagemTemporal } from "./PersonagemTemporal";

class FilaTemporal {
    private personagens:PersonagemTemporal[] = []

    estaVazia(): boolean {
        return this.personagens.length == 0;
    }
    
    enfileirar(personagem:PersonagemTemporal): void {
        this.personagens.push(personagem)
    }

    desenfileirar(): PersonagemTemporal | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined
        }
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
        console.log(this.personagens)
    }
}