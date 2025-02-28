// Crie uma classe Inventario que possa armazenar diferentes tipos de itens do Minecraft (blocos, ferramentas, etc.).
// A classe deve ter métodos para adicionar, remover e exibir os itens do inventário. 

export class Inventario {
    private itens:string[] = []

    addItem(...itemRecebido:string[]) {
        console.log(`${"=".repeat(13)} ADICIONANDO ITENS ${"=".repeat(13)}`)

        for (let i=0; i < arguments.length; i++) {
            this.itens.push(itemRecebido[i])
            console.log(`${itemRecebido[i]}`)
        }
    };

    removeItem(itemRecebido:string) {
        console.log(`${"=".repeat(14)} REMOVENDO ITENS ${"=".repeat(14)}`)

        if (this.itens.includes(itemRecebido)) {
            const itemRecebidoIndex = this.itens.indexOf(itemRecebido)
            this.itens.splice(itemRecebidoIndex, 1)
            console.log(`${itemRecebido} removido com sucesso!`)

        } else {
            console.log(`[ERRO] ${itemRecebido} nao existe no inventario!`)
        }
    };

    info() {
        console.log(`${"=".repeat(10)} Inventario selecionado ${"=".repeat(10)}`), console.table(this.itens)
    };
}
