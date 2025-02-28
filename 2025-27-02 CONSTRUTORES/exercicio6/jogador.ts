// Crie uma classe Jogador que tenha um objeto do tipo Inventario como atributo.

import { Inventario } from "./inventario";

class Jogador {
    public inventario!:Inventario;

    constructor(inventarioRecebido:Inventario) {
        this.inventario = inventarioRecebido
    };
}

const inventario1 = new Inventario();
inventario1.addItem("Picareta de Ferro", "Capacete de Ouro", "Bloco de Obsidiana", "Porta de Madeira");
inventario1.removeItem("Bloco de Obsidiana");
inventario1.info();

const jogador1 = new Jogador(inventario1);
jogador1.inventario.info()
