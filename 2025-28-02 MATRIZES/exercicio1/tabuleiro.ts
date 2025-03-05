let rs = require('readline-sync')

import { Inventario } from "./inventario";
import { Jogador } from "./jogador";

export class Tabuleiro {
    private jogador:Jogador;
    private inventario:Inventario

    private possiveisItens:string[] = [
        "Diamante",
        "Bloco de Terra",
        "Carne Podre",
        "Espada de Madeira",
        "Olho de Aranha",
        "Polvora",
        "Relogio",
        "Capacete de Couro",
        "Machado de Netherite",
        "Flecha",
        "Arco de Madeira"
    ]

    private posicaoAtual:number[] = [0, 0, 1];

    private matriz:number[][] = [];
    private matrizTemporaria:any[][];


    constructor(jogadorRecebido:Jogador, dimensaoRecebida:number[]) {
        this.jogador = jogadorRecebido
        this.inventario = this.jogador.inventario
        this.matriz = this.setMatriz(dimensaoRecebida);
        this.matrizTemporaria = this.setMatriz(dimensaoRecebida);
        this.matrizTemporaria[0][0] = 'X'
    };

    // Set
    private setMatriz(dimensaoRecebida:number[]):number[][] {

        let contador:number = 1
        let tempListFinal:number[][] = [];

        for (let i:number=0; i < dimensaoRecebida[1]; i++) {

            let tempList:number[] = []
            for (let j:number=0; j < dimensaoRecebida[0]; j++) {
                tempList.push(contador)
                contador++
            }
            tempListFinal.push(tempList)

        }
        return tempListFinal

    }

    // Define, aleatoriamente, se o usuario ganhou um item ao chegar a uma celula da matriz
    private procurarLoot():void {
        if (Math.floor(Math.random() * 1000) <= 300) {

            const itemGanho:string = this.possiveisItens[Math.floor(Math.random() * this.possiveisItens.length)]
            console.log(`\n[!!!] Voce matou um goblin! Em seu corpo, voce encontrou... ${itemGanho}!`)
            this.inventario.addItem(itemGanho)
        } else {
            
            console.log('Nao parece ter nada por aqui... talvez na proxima!')
        }
    }

    // Armazena a posicao atual do jogador
    private salvar_PosicaoDoJogador():void {
        for (let i:number=0; i < this.matrizTemporaria.length; i++) {
            for (let j:number=0; j < this.matrizTemporaria.length; j++) {
                if (this.matrizTemporaria[i][j] === 'X') {
                    this.posicaoAtual = [i, j, this.matriz[i][j]]
                    this.procurarLoot()
                }
            }
        }
    }

    
    private restaurar_NumeroDaPosicao():void {
        this.matrizTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]] = this.matriz[this.posicaoAtual[0]][this.posicaoAtual[1]]
    }

    // Tenta realizar o movimento recebido
    private mover(direcao:string):void {

        switch(direcao) {
            case "W":
                if (this.matrizTemporaria[this.posicaoAtual[0]-1]) {
                    this.restaurar_NumeroDaPosicao()
                    this.matrizTemporaria[this.posicaoAtual[0]-1][this.posicaoAtual[1]] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvar_PosicaoDoJogador()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            case "A":
                if (this.matrizTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]-1]) {
                    this.restaurar_NumeroDaPosicao()
                    this.matrizTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]-1] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvar_PosicaoDoJogador()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            case "D":
                if (this.matrizTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]+1]) {
                    this.restaurar_NumeroDaPosicao()
                    this.matrizTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]+1] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvar_PosicaoDoJogador()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            case "S":
                if (this.matrizTemporaria[this.posicaoAtual[0]+1]) {
                    this.restaurar_NumeroDaPosicao()
                    this.matrizTemporaria[this.posicaoAtual[0]+1][this.posicaoAtual[1]] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvar_PosicaoDoJogador()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            default:
                console.log("Opcao invalida!")
        }
    }

    // O jogo em si
    public jogar():void {
        while (true) {
            console.log(`${'='.repeat(10)} Tabuleiro ${'='.repeat(10)}`)
            console.table(this.matrizTemporaria)

            // Oferece ao jogador opcoes
            const possiveisOpcoes:string[][] = [['W', 'SUBIR'],['A', 'VIRAR A ESQUERDA'],['S', 'DESCER'],['D', 'VIRAR A DIREITA'],['I', 'ACESSAR SEU INVENTARIO'], ['Q', 'SAIR DO JOGO']]
            console.log('Controles:')
            for (let i:number=0; i < possiveisOpcoes.length; i++) {
                if ((i == 4) || (i == 5)) {
                    console.log()
                }
                console.log(`> [${possiveisOpcoes[i][0]}] para ${possiveisOpcoes[i][1]}`)
            };
            let opcao:string = rs.question("\nEscolha uma opcao: ").toUpperCase()
            for (let i:number=0; i < possiveisOpcoes.length; i++) {
                if (possiveisOpcoes[i].includes(opcao)) {
                    if (opcao == 'I') {
                        this.inventario.getInventario()
                        break;
                    } else if (opcao == 'Q') {
                        console.log('Saindo...')
                        return
                    } else {
                        this.mover(opcao)
                        break;
                    };
                };
            };
        };
    };
};
