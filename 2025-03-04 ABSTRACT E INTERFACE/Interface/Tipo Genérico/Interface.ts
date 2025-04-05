interface Lista<generico> {
    adicionar(item:generico):void;
    remover(item:generico):void;
    tamanho():number;
}

class ListaNumerica implements Lista<number> {
    private items: number[] = []


    adicionar(item: number): void {
        this.items.push(item)
    }
    remover(item: number):void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1)
        }
    }
    tamanho():number {
        return this.items.length
    }
}

const lista1:ListaNumerica = new ListaNumerica()
lista1.adicionar(5)
lista1.adicionar(2)
console.log(lista1.tamanho())