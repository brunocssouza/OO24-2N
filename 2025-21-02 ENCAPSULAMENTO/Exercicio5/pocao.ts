import { Ingrediente } from "./ingrediente";

export class Pocao {
    private nome!:string;    // '!' Inibe avisos de falta de inicialização de variável por ela só ser declarada no futuro.
    private ingredientes: Ingrediente[] = [];
    private efeito: string[] = [];

    // Set
    setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido;
        console.log('\nNome da pocao definido!');
    };
    addIngrediente(...ingredienteRecebido:Ingrediente[]):void { // ... permite aceitar ilimitadas quantidades de argumentos
        for (let i:number=0; i < ingredienteRecebido.length; i++) {
            this.ingredientes.push(ingredienteRecebido[i]);
            this.efeito.push(ingredienteRecebido[i].getEfeito())
            console.log(`Ingrediente ${ingredienteRecebido[i].getNome()} adicionado!`);
        } 
    };

    // Get
    getInfo():void {
        console.log('Ingredientes e seus efeitos:');
        console.table(this.ingredientes);
    };

    // Main
    prepararPocao():void {
        console.log(`Preparando ${this.nome}... \nPocao criada! Os seguintes efeitos foram aplicados a ela:`);
        for (let i:number=0; i < this.efeito.length; i++) {
            console.log(this.efeito[i])
        };
    };
};

// Criacao de ingredientes
let ingrediente1 = new Ingrediente();
ingrediente1.setNome('Lagrima de Grifo');
ingrediente1.setQuantidade(2);
ingrediente1.setEfeito('Rejuvenescimento');

let ingrediente2 = new Ingrediente();
ingrediente2.setNome('Coracao de Dragao');
ingrediente2.setQuantidade(1);
ingrediente2.setEfeito('Aumento extremo de forca');

let ingrediente3 = new Ingrediente();
ingrediente3.setNome('Pena de Coruja');
ingrediente3.setQuantidade(8);
ingrediente3.setEfeito('Visao noturna');

// Criacao da pocao
let pocao = new Pocao();
pocao.setNome('Pocao de Renascimento');
pocao.addIngrediente(ingrediente1, ingrediente2, ingrediente3);
pocao.getInfo();
pocao.prepararPocao();
