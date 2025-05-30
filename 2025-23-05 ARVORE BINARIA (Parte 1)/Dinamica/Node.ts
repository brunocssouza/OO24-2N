export class Node<T> {
    protected valor?:T;
    protected children:Node<T>[] = [];

    addChildren(node:Node<T>) {
        this.children.push(node);
    }
    
    getChildren():Node<T>[] {
        return this.children;
    }

    setValue(valor:T):void {
        this.valor = valor;
    }
}
