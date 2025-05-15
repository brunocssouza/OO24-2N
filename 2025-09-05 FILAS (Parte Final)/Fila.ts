class Fila <T> {
    private elementos: T[] = [];

    estaVazia(): boolean {
        return this.elementos.length == 0;
    }
    
    enfileirar(item:T) {
        this.elementos.push(item)
    }

    desenfileirar(): T | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined
        }
        return this.elementos.shift();
    }

    primeiro():T | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined;
        }
        return this.elementos[0];
    }

    tamanho(): number {
        return this.elementos.length
    }
}

const filaClientes = new Fila<string>()
filaClientes.enfileirar("Cliente 1")
filaClientes.enfileirar("Cliente 2")
filaClientes.enfileirar("Cliente 3")
console.log(`Próximo cliente a ser atendido ${filaClientes.desenfileirar()}`)
console.log(`Próximo cliente a ser atendido ${filaClientes.desenfileirar()}`)
console.log(`A fila está vazia? ${filaClientes.estaVazia()}`)
