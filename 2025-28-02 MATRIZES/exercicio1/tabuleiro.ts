const rs = require('readline-sync')


import { Jogador } from "./jogador";


class Tabuleiro {
    private area:number[][] = []

    setArea(xRecebido:number, yRecebido:number) {
        let contador:number = xRecebido
        for (let i=0; i < yRecebido; i++) {
            contador++
            let tempLista:number[] = []

            for (let j=0; j < xRecebido; j++) {
                tempLista.push(contador)
            }

            this.area.push(tempLista)
        }
    }

    jogar():void {
        let tempArea:any[] = this.area

        let atualPosicao = [this.area[0][0], 0, 0] // [Valor, Index1, Index2]
        tempArea[0][0] = 'X'

        while (true) {
            for(let i=0; i < tempArea.length; i++) {
                console.log(tempArea[i], '\n')
            }

            const possiveisDirecoes = ["W", "A", "D", "S"]
            console.log("Para ir pra cima: W")
            console.log("Para ir pra esquerda: A")
            console.log("Para ir pra direita: D")
            console.log("Para ir pra baixo: S")
            let direcao = rs.question("Escolha uma direcao:").toUpperCase()

            if (possiveisDirecoes.includes(direcao)) {

                // Guarda um backup do atual local
                for(let i=0; i < tempArea.length; i++) {
                    if (tempArea[i].indexOf('X') > -1) {
                        atualPosicao = this.area[i][tempArea[i].indexOf('X')]
                    }
                }

                // Tenta mover para a direcao indicada
                if (direcao == 'W') {
                    for(let i=0; i < tempArea.length; i++) {
                        if (tempArea[i-1]) {


                        }

                }

            }
            else {
                console.log("DIRECAO INVALIDA")
            }
        }

    }
    }
}

const jogador1 = new Jogador();
jogador1.getInventario()

const tabuleiro1 = new Tabuleiro();
tabuleiro1.setArea(2,2)

tabuleiro1.jogar()
