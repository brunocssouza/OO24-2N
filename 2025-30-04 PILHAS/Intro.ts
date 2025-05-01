// Exemplo de criação de uma estrutura de dados chamada Pilha:
class Pilha<T> {
    private elementos: T[] = []

    push(elemento: T): void {   // Adiciona um elemento ao fim da lista
        this.elementos.push(elemento)
    }
    pop(): T | undefined {      // Remove um elemento do fim da lista
        return this.elementos.pop()
    }
    peek(): T | undefined {     // Retorna o último elemento da lista
        return this.elementos[this.elementos.length-1]
    }
    isEmpty(): boolean {        // Verifica se a estrutura está vazia
        return this.elementos.length === 0
    }
    size(): number  {           // Retorna a quantidade de elementos contidos na estrutura.
        return this.elementos.length
    }
    clear(): void {             // Esvazia a estrutura.
        this.elementos.length = 0
    }
}

// Implementação:
const minhaPilha: Pilha<number> = new Pilha<number>();
minhaPilha.push(1)
minhaPilha.push(2)
minhaPilha.push(3)

console.log(minhaPilha.peek())
console.log(minhaPilha.isEmpty())