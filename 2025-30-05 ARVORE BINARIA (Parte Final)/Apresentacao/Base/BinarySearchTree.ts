import { Node } from "./Node";

export class BinarySearchTree<T> {
    private root: Node<T> | null = null;
  
    constructor(private compare: (a: T, b: T) => number) {
      
    }
  
    // Inserir
    insert(value: T): void {
      this.root = this.insertNode(this.root, value);
    }
  
    private insertNode(node: Node<T> | null, value: T): Node<T> {
      if (node === null) return new Node(value);
  
      if (this.compare(value, node.value) < 0) {
        node.left = this.insertNode(node.left, value);
      } else {
        node.right = this.insertNode(node.right, value);
      }
      return node;
    }
  
    // Pesquisar
    search(value: T): boolean {
      return this.searchNode(this.root, value);
    }
  
    private searchNode(node: Node<T> | null, value: T): boolean {
      if (node === null) return false;
  
      const cmp = this.compare(value, node.value);
      if (cmp === 0) return true;
      return cmp < 0
        ? this.searchNode(node.left, value)
        : this.searchNode(node.right, value);
    }
  
    // Excluir
    delete(value: T): void {
      this.root = this.deleteNode(this.root, value);
    }
  
    private deleteNode(node: Node<T> | null, value: T): Node<T> | null {
      if (node === null) return null;
  
      const cmp = this.compare(value, node.value);
  
      if (cmp < 0) {
        node.left = this.deleteNode(node.left, value);
      } else if (cmp > 0) {
        node.right = this.deleteNode(node.right, value);
      } else {
        // Nó com 0 ou 1 filho
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
  
        // Nó com 2 filhos: substitui com o menor da subárvore direita
        const minLargerNode = this.findMinNode(node.right)!;
        node.value = minLargerNode.value;
        node.right = this.deleteNode(node.right, minLargerNode.value);
      }
  
      return node;
    }
  
    private findMinNode(node: Node<T>): Node<T> {
      while (node.left !== null) node = node.left;
      return node;
    }
  
    // Travessia em ordem (esquerda -> raiz -> direita)
    inOrder(): T[] {
      const result: T[] = [];
      this.inOrderTraverse(this.root, result);
      return result;
    }
  
    private inOrderTraverse(node: Node<T> | null, result: T[]): void {
      if (node !== null) {
        this.inOrderTraverse(node.left, result);
        result.push(node.value);
        this.inOrderTraverse(node.right, result);
      }
    }
  
    // Travessia pré-ordem (raiz -> esquerda -> direita)
    preOrder(): T[] {
      const result: T[] = [];
      this.preOrderTraverse(this.root, result);
      return result;
    }
  
    private preOrderTraverse(node: Node<T> | null, result: T[]): void {
      if (node !== null) {
        result.push(node.value);
        this.preOrderTraverse(node.left, result);
        this.preOrderTraverse(node.right, result);
      }
    }
  
    // Travessia pós-ordem (esquerda -> direita -> raiz)
    postOrder(): T[] {
      const result: T[] = [];
      this.postOrderTraverse(this.root, result);
      return result;
    }
  
    private postOrderTraverse(node: Node<T> | null, result: T[]): void {
      if (node !== null) {
        this.postOrderTraverse(node.left, result);
        this.postOrderTraverse(node.right, result);
        result.push(node.value);
      }
    }
  }
  