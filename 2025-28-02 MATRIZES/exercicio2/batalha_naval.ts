// Jogo de Batalha Naval. Objetivo: Afundar todos os navios.
// a) Criar uma matriz bidimensional onde cada célula será inicializada como 0 (representando água).
// b) Criar uma função para posicionar os navios, células com navio serão marcadas com 1.
// c) Criar uma função que permite ao jogador escolher uma célula, verificando se é um acerto (navio), erro (água) ou posição já escolhida.
// d) Criar um laço (loop) para permitir que o jogador continue atacando até que todos os navios sejam afundados. Podemos contar quantos navios restam e encerrar o jogo quando o jogador os afundar todos.
let rs = require('readline-sync');


class Batalha_Naval {

    private matriz:any[][] = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ]

    private possiveisCoord:any[][] = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], 
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    ]

    private naviosPosicionados:boolean = false
    private naviosRestantes:number = 0;

    getJogoAcabou():boolean {
        if (this.naviosPosicionados) {
            let contador = 0
            this.matriz.forEach(element => {
                element.forEach(element => {
                    if (element == '1') { contador++ }       
                });
            });
            this.naviosRestantes = contador;
            if (this.naviosRestantes > 0) {
                console.log(`Navios restantes: ${this.naviosRestantes}`)
                return false
            } else { 
                console.log(`Todos os navios foram abatidos! Muito bem!`)
                return true 
            }
        } else { return false } 
    }

    planejar():void {
        console.log("=============== MODO DE PLANEJAMENTO ===============")
        let inputRecebido:string[] = rs.question("Considerando as COLUNAS como: A ate J, e as LINHAS como: 1 ate 10. Especifique o local de posicionamento desejado (ex. C4): ").toUpperCase().trim().split("")
        if ((inputRecebido.length == 2) && (this.possiveisCoord[0].includes(inputRecebido[0])) && (this.possiveisCoord[1].includes(inputRecebido[1]))) {
            
            // Linha
            const linha:number = Number(inputRecebido[1])-1
            // Coluna
            const coluna:number = this.possiveisCoord[0].indexOf(inputRecebido[0]);

            this.matriz[linha][coluna] = 1

            this.naviosRestantes++
            this.naviosPosicionados = true
            console.log('Navio posicionado!')
                
        } else {console.log('Dado ou formato incorreto inserido!')}
    }

    atacar():void {

        if (!this.naviosPosicionados) {
            console.log('Nao ha navios posicionados! Acesse a secao de Planejamento e posicione navios.')
        } else {
            while (this.naviosRestantes > 0) {
                console.clear()
                console.table(this.matriz)
                console.log("=============== MODO DE ATAQUE ===============")
                let inputRecebido:string[] = rs.question("Considerando as COLUNAS como: A ate J, e as LINHAS como: 1 ate 10. Especifique o local de ataque (ex. D3): ").toUpperCase().trim().split("")
                if ((inputRecebido.length == 2) && (this.possiveisCoord[0].includes(inputRecebido[0])) && (this.possiveisCoord[1].includes(inputRecebido[1]))) {

                    // Linha
                    const linha:number = Number(inputRecebido[1])-1
                    // Coluna
                    const coluna:number = this.possiveisCoord[0].indexOf(inputRecebido[0]);

                    // Verifica se acertou um navio
                    if (this.matriz[linha][coluna] == '1') {

                        console.log('Voce acertou um navio!')
                        this.matriz[linha][coluna] = 'O'
                        this.naviosRestantes--

                    // Verifica se nao acertou um navio
                    } else if(this.matriz[linha][coluna] == '0') {

                        console.log('Voce errou o alvo!')
                        this.matriz[linha][coluna] = 'X'

                    // Verifica local-alvo ja foi atingido
                    } else {console.log('Local alvo ja atacado anteriormente!')}

                } else {console.log('Dado ou formato incorreto inserido!')}
            }
        }
    }

    menu():void {
        console.log("=============== BATALHA NAVAL ===============")
        console.table(this.matriz)
        
        console.log("=============== OPCOES DISPONIVEIS ===============")
        console.log('1. Planejamento')
        console.log('2. Iniciar')

        const inputRecebido:number = rs.questionInt("Digite a opcao desejada: ")
        if (inputRecebido == 1) { this.planejar() }
        else if (inputRecebido == 2) {this.atacar()}
        else {console.log('Opcao inexistente!')}
    }

}

const batalhaNaval:Batalha_Naval = new Batalha_Naval()


while (!batalhaNaval.getJogoAcabou()) {
    batalhaNaval.menu()
}



