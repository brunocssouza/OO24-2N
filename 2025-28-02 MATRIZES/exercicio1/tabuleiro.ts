

const rs:any = require('readline-sync')

import { Jogador } from "./jogador";

export class Tabuleiro {
    private jogador:Jogador;
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

    private area:number[][] = [];
    private areaTemporaria:any[][];


    constructor(jogadorRecebido:Jogador, dimensaoRecebida:number[]) {
        this.jogador = jogadorRecebido
        this.area = this.setArea(dimensaoRecebida);
        this.areaTemporaria = this.setArea(dimensaoRecebida);
        this.areaTemporaria[0][0] = 'X'
    };

    // Set
    private setArea(dimensaoRecebida:number[]):number[][] {

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

    private procurarLoot():void {
        if (Math.floor(Math.random() * 1000) <= 300) {

            const itemGanho:string = this.possiveisItens[Math.floor(Math.random() * this.possiveisItens.length)]
            console.log(`\n[!!!] Um achado! Em meio a escuridao, voce encontrou... ${itemGanho}!`)
            this.jogador.addItem(itemGanho)
        }
        else {

            console.log('Nao parece ter nada por aqui... talvez na proxima!')
        }
        

    }

    // Armazena a posicao atual do jogador
    private salvarPosicao():void {
        for (let i:number=0; i < this.areaTemporaria.length; i++) {
            for (let j:number=0; j < this.areaTemporaria.length; j++) {
                if (this.areaTemporaria[i][j] === 'X') {
                    this.posicaoAtual = [i, j, this.area[i][j]]
                    this.procurarLoot()
                }
            }
        }
    }

    private restaurarPosicaoOriginal():void {
        this.areaTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]] = this.area[this.posicaoAtual[0]][this.posicaoAtual[1]]
    }

    // Tenta realizar o movimento recebido
    private mover(direcao:string):void {

        switch(direcao) {
            case "W":
                if (this.areaTemporaria[this.posicaoAtual[0]-1]) {
                    this.restaurarPosicaoOriginal()
                    this.areaTemporaria[this.posicaoAtual[0]-1][this.posicaoAtual[1]] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvarPosicao()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            case "A":
                if (this.areaTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]-1]) {
                    this.restaurarPosicaoOriginal()
                    this.areaTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]-1] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvarPosicao()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            case "D":
                if (this.areaTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]+1]) {
                    this.restaurarPosicaoOriginal()
                    this.areaTemporaria[this.posicaoAtual[0]][this.posicaoAtual[1]+1] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvarPosicao()
                } else {
                    console.log("Este movimento nao pode ser realizado")
                }
                break;
            case "S":
                if (this.areaTemporaria[this.posicaoAtual[0]+1]) {
                    this.restaurarPosicaoOriginal()
                    this.areaTemporaria[this.posicaoAtual[0]+1][this.posicaoAtual[1]] = 'X'
                    console.log("Movimento efetuado!")
                    this.salvarPosicao()
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
            console.log(`${'='.repeat(10)} Tabuleiro ${'='.repeat(10)}`), console.table(this.areaTemporaria)

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
                        this.jogador.getInventario()
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
