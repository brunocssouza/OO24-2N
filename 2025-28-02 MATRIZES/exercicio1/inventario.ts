// Crie uma classe Inventario que possa armazenar diferentes tipos de inventario do Minecraft (blocos, ferramentas, etc.).
// A classe deve ter métodos para adicionar, remover e exibir os inventario do inventário. 

export class Inventario {
    private inventario:string[] = []

    addItem(...itemRecebido:string[]) {
        console.log(`${"=".repeat(13)} ADICIONANDO inventario ${"=".repeat(13)}`)

        for (let i=0; i < arguments.length; i++) {
            this.inventario.push(itemRecebido[i])
            console.log(`${itemRecebido[i]}`)
        }

    };

    removeItem(itemRecebido:string) {
        console.log(`${"=".repeat(14)} REMOVENDO inventario ${"=".repeat(14)}`)

        if (this.inventario.includes(itemRecebido)) {
            const itemRecebidoIndex = this.inventario.indexOf(itemRecebido)
            this.inventario.splice(itemRecebidoIndex, 1)
            console.log(`${itemRecebido} removido com sucesso!`)

        } else {
            console.log(`[ERRO] ${itemRecebido} nao existe no inventario!`)
        }
    };

    getInventario() {
        if (this.inventario.length > 0) {
            console.table(this.inventario)
        } else {
            console.log('Inventario vazio.')
        }
    };
};
