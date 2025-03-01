// Crie uma classe Jogador que tenha um objeto do tipo Inventario como atributo.

export class Jogador {
    private inventario:string[]= [];

    addItem(itemRecebido:string):void {
        this.inventario.push(itemRecebido)
    }

    getInventario():void {
        console.table("Inventário atual:", this.inventario)
    }
}
