export abstract class Decks<T> {
    protected abstract elementos: T[];

    adicionarNoInicio(item:T):void {
        this.elementos.unshift(item);
    }
    adicionarNoFinal(item:T):void {
         this.elementos.push(item);
    }
    removerDoInicio():T | undefined {
        return this.elementos.shift();
    }
    removerDoFinal():T | undefined {
        return this.elementos.pop()
    }
    primeiro():T | undefined {
        return this.elementos[0];
    }
    ultimo():T {
        return this.elementos[this.elementos.length -1];
    }
    estaVazio():boolean {
        return this.elementos.length === 0;
    }
    tamanho(): number {
        return this.elementos.length;
    }
    limpar():void {
        this.elementos.length = 0;
    }
    exibir(): void {
        console.table(this.elementos);
    }

    getElementos(): T[] {
        return this.elementos
    }
    setElementos(elementos: T[]): void {
        this.elementos = elementos
    }
}
