// Crie a classe Feitiço com os atributos privados nome, tipo (ex: defesa, ataque, cura) e poder. 
// Implemente os métodos getters e setters. 
// Crie um método lancarFeitiço que simule o lançamento do feitiço, como "O feitiço [nome] do tipo [tipo] com poder [poder] foi lançado!".

export class Feitico {
    private nome!:string;
    private tipo!:string;
    private poder!:number; 

    // Set
    setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido
    };
    setTipo(tipoRecebido:string):void {
        this.tipo = tipoRecebido
    };
    setPoder(poderRecebido:number):void {
        this.poder = poderRecebido
    };

    // Get
    getNome():string {
        return this.nome
    };
    getTipo():string {
        return this.tipo
    };
    getPoder():number {
        return this.poder
    };

    lancarFeitico():void {
        console.log(`O feitico ${this.nome} do tipo ${this.tipo} com poder ${this.poder} foi lancado!`)
    }
}

let feitico:Feitico = new Feitico;
feitico.setNome("Avaiana de Pau");
feitico.setTipo("Ataque");
feitico.setPoder(100000000000);

feitico.lancarFeitico();
