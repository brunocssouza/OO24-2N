import { Chapeu } from "./Chapeu";

class ChapeuSelecao {
    private chapeu:Chapeu[] = []

    estaVazia(): boolean {
        return this.chapeu.length == 0;
    }
    
    enfileirar(chapeu:Chapeu): void {
        this.chapeu.push(chapeu)
        console.log(`${chapeu.getNome()} foi adicionado!`)
    }

    desenfileirar(): Chapeu | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined
        }
        console.log(`${this.chapeu[0].getNome()} foi removido.`)
        return this.chapeu.shift();
    }

    primeiroDaFila():Chapeu | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined;
        }
        return this.chapeu[0];
    }

    tamanho(): number {
        return this.chapeu.length
    }

    exibirFila(): void {
        console.table(this.chapeu)
    }
}



const fila:ChapeuSelecao = new ChapeuSelecao();
fila.enfileirar(new Chapeu("Sonserina"))
fila.enfileirar(new Chapeu("Grifinória"))
fila.enfileirar(new Chapeu("Sonserina"))
fila.enfileirar(new Chapeu("Sonserina"))
fila.enfileirar(new Chapeu("Sonserina"))
fila.enfileirar(new Chapeu("Lufa-Lufa"))
fila.desenfileirar();
fila.desenfileirar();
fila.exibirFila();
