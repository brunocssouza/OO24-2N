// Crie uma classe Personagem com atributos como vida, forca e inventario.

class Personagem {
    private vida:number;
    private forca:number;
    private inventario:string[];

    constructor(vidaRecebida:number, forcaRecebida:number, inventarioRecebido:string[]) {
        this.vida = vidaRecebida;
        this.forca = forcaRecebida
        this.inventario = inventarioRecebido
    };

    info():void {
        console.log(`Vida: ${this.vida} | Forca: ${this.forca} | Inventario: ${this.inventario}`)
    }
};

let personagem1 = new Personagem(20, 7, ["Espada de diamante", "Peitoral de Ferro", "Picareta de Madeira"]);
personagem1.info();
