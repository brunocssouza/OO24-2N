export class Node<T> {
    protected value:T;
    protected children:Node<T>[] = []

    constructor(value:T) {
        this.value = value
    }

    addChildren(node:Node<T>) {
        this.children.push(node)
    }
    getChildren():Node<T>[] {
        return this.children
    }
}
