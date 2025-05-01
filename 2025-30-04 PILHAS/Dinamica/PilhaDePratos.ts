// Exemplo de criação de uma estrutura de dados chamada Pilha:
class PilhaDePratos {
    private elementos: string[] = []

    adicionarPrato(elemento: string): void {   // Adiciona um elemento ao fim da lista
        this.elementos.push(elemento)
    }
    retirarPrato(): string | undefined {      // Remove um elemento do fim da lista
        return this.elementos.pop()
    }
    estaVazio(): boolean {        // Verifica se a estrutura está vazia
        return this.elementos.length === 0
    }
    tamanho(): number  {           // Retorna a quantidade de elementos contidos na estrutura.
        return this.elementos.length
    }
}

// Implementação:
const pilha_de_pratos1 = new PilhaDePratos
pilha_de_pratos1.adicionarPrato("Branco")
pilha_de_pratos1.adicionarPrato("Preto")
pilha_de_pratos1.adicionarPrato("Vermelho")
pilha_de_pratos1.retirarPrato()
console.log(pilha_de_pratos1.tamanho())