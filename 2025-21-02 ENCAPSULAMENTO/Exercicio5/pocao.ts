import { Ingrediente } from "./ingrediente";

export class Pocao {
    private nome!:string;
    private ingredientes: {nome:string, quantidade:number, efeito:string}[] = [];
    private efeito: string[] = [];

    // Set
    setNome(nomeRecebido:string) {
        this.nome = nomeRecebido;
        console.log('\nNome da pocao definido!');
    };

    // Get
    getInfo():void {
        console.log('Ingredientes e seus efeitos:');
        console.table(this.ingredientes);
    };

    addIngrediente(ingredienteRecebido:Ingrediente) {
        let ingredienteRecebidoInfo: {nome:string, quantidade:number, efeito:string} = {
            nome: ingredienteRecebido.getNome(),
            quantidade: ingredienteRecebido.getQuantidade(),
            efeito: ingredienteRecebido.getEfeito()
        };

        this.efeito.push(ingredienteRecebidoInfo.efeito);
        this.ingredientes.push(ingredienteRecebidoInfo);
        console.log(`Ingrediente ${ingredienteRecebidoInfo.nome} adicionado!`);
    };

    prepararPocao():void {
        console.log(`Preparando ${this.nome}... \nPocao criada! Os seguintes efeitos foram aplicados a ela:`);
        for (let i = 0; i < this.efeito.length; i++) {
            console.log(this.efeito[i])
        };
    };
};

// Criacao de ingredientes
let ingrediente1 = new Ingrediente;
ingrediente1.setNome('Lagrima de Grifo');
ingrediente1.setQuantidade(2);
ingrediente1.setEfeito('Rejuvenescimento');

let ingrediente2 = new Ingrediente;
ingrediente2.setNome('Coracao de Dragao');
ingrediente2.setQuantidade(1);
ingrediente2.setEfeito('Aumento extremo de forca');

// Criacao da pocao
let pocao = new Pocao;
pocao.setNome('Pocao de Renascimento');
pocao.addIngrediente(ingrediente1);
pocao.addIngrediente(ingrediente2);
pocao.getInfo();
pocao.prepararPocao();

