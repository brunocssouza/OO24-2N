import { Node } from "./Node";
import { Pessoa } from "./Pessoa";

export class ArvoreGenealogica {
    public rootNode: Node<Pessoa>;

    constructor(rootNode:Node<Pessoa>) {
        this.rootNode = rootNode;
    }

    private iterarNodes(rootNode: Node<Pessoa> = this.rootNode): Node<Pessoa>[] | undefined {
        const allNodes:Node<Pessoa>[] = [this.rootNode];

        function iterar(node: Node<Pessoa>):void {
            console.log(`Iterando filhos de ${node.value.getNome()}...`)
            let filhos:[Node<Pessoa>|null, Node<Pessoa>|null] = [node.left, node.right]
            for (let elemento of filhos) {
                if (elemento) {
                    allNodes.push(elemento)
                    iterar(elemento)
                }
            }   // eu tO Ficando loco
            return undefined
        }
        iterar(rootNode)
        console.log()

        return allNodes
    }


    public encontrarPessoa(nomePessoa:string): Pessoa | undefined {
        console.log("\n================== ALGORITMO DE BUSCA ==================")

        const nodes = this.iterarNodes()
        if (nodes) {
            for (let node of nodes) {
                if (node.value.getNome() == nomePessoa) {
                    console.log(`Busca por ${nomePessoa} foi bem-sucedida!`)
                    return node.value
                }
            }
        }
        console.log(`Falha na tentativa de encontrar ${nomePessoa}.`)
        return undefined
    } 
    

    public adicionarFilho(paiPessoa: Pessoa, filhoPessoa: Pessoa): void {
        console.log("\n================== ADICIONANDO FILHO... ==================")
        
        const nodes = this.iterarNodes()
        if (nodes) {
            for (let node of nodes) {
                if (node.value == paiPessoa) {
                    if (!node.left) {
                        node.left = new Node<Pessoa>(filhoPessoa)
                        console.log(`${filhoPessoa.getNome()} foi adicionado como filho de ${paiPessoa.getNome()}`)
                    } else if (!node.right) {
                        node.right = new Node<Pessoa>(filhoPessoa)
                        console.log(`${filhoPessoa.getNome()} foi adicionado como filho de ${paiPessoa.getNome()}`)
                    } else {
                        console.log(`${paiPessoa.getNome()} já possui o máximo de filhos.`)
                    }
                    return;
                }
            }
            console.log("Nenhum node com o Pai indicado foi encontrado.")
        }
    }
}

