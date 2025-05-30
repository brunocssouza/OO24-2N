import { Node } from "./Node";
import { Pessoa } from "./Pessoa";

export class ArvoreGenealogica extends Node<Pessoa> {
    private raiz: Node<Pessoa> | null;

    constructor(raiz:Node<Pessoa>) {
        super();
        this.raiz = raiz;
    }

    adicionarFilho(pai: Node<Pessoa>, filho: Node<Pessoa>): void {
        pai.addChildren(filho);
    }

    encontrarPessoa(nome:string): Pessoa | undefined {
        
        return
    }

    getRaiz():Node<Pessoa> | null {
        return this.raiz;
    }
}
