export class Personagem {
    // Attributes
    private nome!:string;
    private arma!:string;
    private forca!:number;
    private classe!:string;
    private vida!:number;

    // Set
    setAttributes(nomeRecebido:string, armaRecebida:string, forcaRecebida:number, classeRecebida:string, vidaRecebida:number) {
        this.nome = nomeRecebido
        this.arma = armaRecebida
        this.forca = forcaRecebida
        this.classe = classeRecebida
        this.vida = vidaRecebida
    };

    // Get
    getNome():string {
        return this.nome
    }
    getArma():string {
        return this.arma
    }
    getForca():number {
        return this.forca
    }
    getClasse():string {
        return this.classe
    }
    getVida():number {
        return this.vida
    }

};

let guerreiro:Personagem = new Personagem();
guerreiro.setAttributes("oMiozin", "Espada de duas maos", 50, "Guerreiro", 120)
console.log(guerreiro.getClasse())
