import { Inventario } from "./inventario";

export class Jogador {
    private nome:string;
    public inventario:Inventario;

    constructor(nomeRecebido:string, inventarioRecebido:Inventario) {
        this.inventario = inventarioRecebido
        this.nome = nomeRecebido
    };
    
};
