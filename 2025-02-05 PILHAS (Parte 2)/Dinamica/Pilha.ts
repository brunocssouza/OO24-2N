import { Carta } from "./Carta"

// Exemplo de criação de uma estrutura de dados chamada Pilha:
export class Pilha {
    private cartas: Carta[] = []

    constructor(cartas: Carta[]) {
        this.cartas = cartas
    }

    adicionarTopo(carta: Carta): void {   // Adiciona um elemento ao fim da lista
        this.cartas.push(carta)
    }
    retirarTopo(): void | undefined {      // Remove um elemento do fim da lista
        this.cartas.pop()
    }
    peek(): Carta | undefined {
        return this.cartas[this.cartas.length - 1]
    }
    estaVazio(): boolean {        // Verifica se a estrutura está vazia
        return this.cartas.length === 0
    }
    tamanho(): number  {           // Retorna a quantidade de cartas contidos na estrutura.
        return this.cartas.length
    }

    getCartas(): Carta[] {
        return this.cartas
    }
    setCartas(cartas: Carta[]): void {
        this.cartas = cartas
    }
}
