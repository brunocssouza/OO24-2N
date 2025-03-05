// Sistema que simula uma ilha de dinossauros. A ilha é representada por uma matriz 10x10
// Cada célula é um quadrado da ilha e pode ter diferentes tipos de terreno (0: "grama"; 1: "água"; 2: "floresta"; 3: "carnívoro"; 4: "herbívoro")

// a) Crie uma função que irá gerar uma matriz 10x10 onde cada célula tem um valor aleatório (de 0 a 4).

// b) Após gerar a ilha, faça uma função que recebe a direção que os dinossauros irão se mover (cima, baixo, esquerda, direita) Ex.: 
// const movimentos = [[-1, 0], 
// cima[1,0], 
// baixo[0, -1], 
// esquerda[0, 1] 
// direita ];
// OBS: Verifique se a posição está dentro dos limites da ilha. Após mover o dinossauro, transforme a posição da ilha em grama.

// c) Após as movimentações, exiba a ilha e mostre a contagem de dinossauros restantes na ilha.

let readline = require('readline-sync')

class JurassicPark {
    
    private matriz:number[][] = [];
    private qtdeDinossauros:number = 0;

    constructor() {

        // Matriz 10x10 onde cada célula tem um valor aleatório
        for (let i = 0; i < 10; i++) {
            let linha:number[] = [];
            for (let j = 0; j < 10; j++) {
                let randomNum:number = Math.floor(Math.random() * 5)
                linha.push(randomNum)
            } 
            this.matriz.push(linha)
        }

        // Contagem de dinossauros restantes
        for (let i=0; i < this.matriz.length; i++) {
            for (let j=0; j < this.matriz[i].length; j++) {

                let celula = this.matriz[i][j]
                if (celula == 3 || celula == 4) {
                    this.qtdeDinossauros++
                }
            }
        }
    
    }

    moverDinossauros() {
        
        console.log("========================================================")
        console.log("  FACA TODOS OS DINOSSAUROS (3, 4) FUGIREM DO PARQUE!!  ")
        console.log("========================================================")

        while (this.qtdeDinossauros > 0) {
            console.log('========= MOVIMENTANDO DINOSSAUROS =========')
            console.table(this.matriz)
            console.log(`Dinossauros restantes: ${this.qtdeDinossauros} \n \n`)

            const direcao = readline.question("Para que direcao (W, A, S, D) deseja mover os dinossauros? ").toUpperCase().trim()
            switch(direcao) {
                case "W":

                    for (let i=0; i < this.matriz.length; i++) {
                        for (let j=0; j < this.matriz[i].length; j++) {

                            let celula = this.matriz[i][j]
                            if (celula == 3 || celula == 4) {
                           
                                if (this.matriz[i-1]) {
                                    this.matriz[i-1][j] = celula
                                } else { this.qtdeDinossauros-- }
                                this.matriz[i][j] = 0
                            }

                        }
                    }
                    break;

                case "A":

                    for (let i=0; i < this.matriz.length; i++) {
                        for (let j=0; j < this.matriz[i].length; j++) {

                            let celula = this.matriz[i][j]
                            if (celula == 3 || celula == 4) {
                          
                                if (this.matriz[i][j-1]) {
                                    this.matriz[i][j-1] = celula
                                } else { this.qtdeDinossauros-- }
                                this.matriz[i][j] = 0
                            }

                        }
                    }
                    break;

                case "S":

                    for (let i=0; i < this.matriz.length; i++) {
                        for (let j=0; j < this.matriz[i].length; j++) {

                            let celula = this.matriz[i][j]
                            if (celula == 3 || celula == 4) {
                          
                                if (this.matriz[i+1]) {
                                    this.matriz[i+1][j] = celula
                                } else { this.qtdeDinossauros-- }
                                this.matriz[i][j] = 0
                            }

                        }
                    }
                    break;

                case "D":

                    for (let i=0; i < this.matriz.length; i++) {
                        for (let j=0; j < this.matriz[i].length; j++) {

                            let celula = this.matriz[i][j]
                            if (celula == 3 || celula == 4) {
                           
                                if (this.matriz[i][j+1]) {
                                    this.matriz[i][j+1] = celula
                                } else { this.qtdeDinossauros-- }
                                this.matriz[i][j] = 0
                            }

                        }
                    }
                    break;

                default:
                    console.log("Opcao invalida!")
                    break;
            }

            if (this.qtdeDinossauros == 0) {
                console.table(this.matriz)
                console.log("========================================================")
                console.log("            TODOS OS DINOSSAUROS FUGIRAM!!")
                console.log("========================================================")
            }
    
        }

    }     
}

const jurassicPark1 = new JurassicPark()
jurassicPark1.moverDinossauros()
