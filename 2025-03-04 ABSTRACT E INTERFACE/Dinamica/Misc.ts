export class Misc {

    // Função que recebe uma lista e um valor: retorna um array (caso qtdeRecebida maior que 1) de elementos aleatórios não-repetidos a partir da lista recebida.
    // Foi usado pra setar habilidades aleatórias nos Caçadores e Monstros.
    static retornarElementosAleatorios(listaRecebida:any[], qtdeRecebida:number):any {
        const tamanhoMaximo:number = listaRecebida.length

        if (qtdeRecebida == 1) {
            const indexAleatorio:number = Math.floor(Math.random() * tamanhoMaximo)
            return listaRecebida[indexAleatorio]
        }

        const listaTemporaria:any[] = []
        for (let i:number=0; i < qtdeRecebida; i++) {
            let indexAleatorio:number;
            do {
                indexAleatorio = Math.floor(Math.random() * tamanhoMaximo)
            } while (listaTemporaria.includes(listaRecebida[indexAleatorio]))

            listaTemporaria.push(listaRecebida[indexAleatorio])
        }
        return listaTemporaria
    }


}