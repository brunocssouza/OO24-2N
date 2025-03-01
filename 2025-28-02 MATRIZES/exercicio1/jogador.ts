export class Jogador {
    private inventario:string[]= [];

    addItem(itemRecebido:string):void {
        this.inventario.push(itemRecebido)
        this.getInventario()
    }

    getInventario():void {
        if (this.inventario.length > 0 || console.log("Inventario vazio!")) {
            console.log(`${'='.repeat(10)} Inventario ${'='.repeat(10)}`), console.table(this.inventario)
        }
    }
}
