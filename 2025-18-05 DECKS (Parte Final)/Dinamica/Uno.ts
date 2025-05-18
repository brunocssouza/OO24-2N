import { BaralhoUno } from "./BaralhoUno";
import { Carta } from "./Carta";
import { Computador } from "./Computador";
import { Humano } from "./Humano";
import { Jogador } from "./Jogador";

const rs = require('readline-sync')

export class Uno {
    private jogadores:Jogador[] = [];
    private baralhoCompra:BaralhoUno = new BaralhoUno();
    private pilhaDescarte:Carta[] = [new Carta(true)];

    private rodada:number[] = [0, 0];   // [indexJogador, direcao]

    constructor() {
        this.baralhoCompra.criarBaralho()
        this.menu()
    }

    inicarJogo():void {
        console.log("==================== INICIANDO JOGO... =======================\n")

        // Nomes
        let nomes: string[] = [];
        this.jogadores.forEach(jogador => nomes.push(jogador.getNome()));
        console.log(`Jogadores: ${nomes.join(", ")}\n`);

        // Embaralhar
        console.log("Embaralhando...")
        this.baralhoCompra.embaralhar();

        // Distribuicao de cartas
        console.log("Distribuindo cartas...")
        for (let jogador of this.jogadores) {
            for (let i=0; i < 7; i++) {
                jogador.receberCarta(this.baralhoCompra, true)
            }
        }

        console.log("==================== QUE OS JOGOS COMECEM! =======================\n")
        let emAndamento:boolean = true;
        rs.question("Pressione Enter para comecar...")
        
        while (emAndamento) {
            const jogadorAtual = this.jogadores[this.rodada[0]]
            if (jogadorAtual instanceof Humano) {
                console.log("=========================================================")
                console.log(`É a vez de ${jogadorAtual.getNome()}...\n`);
                console.log("=========================================================\n")

                const cartaPilha = this.pilhaDescarte[this.pilhaDescarte.length-1]
                console.log(`Carta na pilha de descarte: ${cartaPilha.getCor()} | ${cartaPilha.getValor()}`)
                console.log("1. Mostrar cartas")
                console.log("2. Jogar carta")
                console.log("3. Comprar carta")
                const opcao = rs.questionInt("Selecione uma opcao: ")
                switch(opcao) {
                    
                    case 1:
                        console.table(jogadorAtual.getMao())
                        break;

                    case 2:
                        const cartaJogada: [Carta, number] = jogadorAtual.jogar()
                        if (this.verficarCarta(cartaJogada[0])) {
                            jogadorAtual.getMao().splice(cartaJogada[1], 1)
                            this.usarCarta(cartaJogada[0])
                            this.pilhaDescarte.push(cartaJogada[0])
                            if (jogadorAtual.getMao().length == 0) {
                                console.log("VOCÊ GANHOU!")
                                emAndamento = false;
                            }
                            this.pularRodada();
                        }
                        break;

                    case 3:
                        jogadorAtual.receberCarta(this.baralhoCompra);
                        this.pularRodada();
                        break;
                    }
                    rs.question("Pressione Enter para continuar...")
                    console.clear()
                }
            }
            console.log("============== FIM DE JOGO ==============")
        }

  

    verficarCarta(carta:Carta):boolean {
        const cartaPilha = this.pilhaDescarte[this.pilhaDescarte.length-1]
        if (carta.getCor() == cartaPilha.getCor() || carta.getValor() == cartaPilha.getValor() || carta.getCor() == "Preto") {
            return true
        }
        rs.question("Carta nao compativel com a pilha de descarte.")
        return false
    }

    pularRodada(): void {
        if (this.rodada[1] == 0) {
            if ((this.rodada[0] + 1) > this.jogadores.length - 1) {
                this.rodada[0] = 0;
            } else {
                this.rodada[0] = this.rodada[0]+1
            }
        } else {
            if ((this.rodada[0] - 1) < 0) {
                this.rodada[0] = this.jogadores.length-1;
            } else {
                this.rodada[0] = this.rodada[0]-1
            }
        } 
    }

    usarCarta(carta:Carta) :void {
        if (carta.getValor() == "Inverter") {
            this.rodada[1] = -1
            return
        }
        else if (carta.getValor() == "Comprar4" || carta.getValor() == "Comprar2") {
            let alvo:Jogador;
            if (this.rodada[1] == 0) {
                if ((this.rodada[0] + 1) > this.jogadores.length - 1) {
                    alvo = this.jogadores[0];
                } else {
                    alvo = this.jogadores[this.rodada[0]+1]
                }
            } else {
                if ((this.rodada[0] - 1) < 0) {
                    alvo = this.jogadores[this.jogadores.length-1];
                } else {
                    alvo = this.jogadores[this.rodada[0]-1]
                }
            }

            if (carta.getValor() == "Comprar4") {
                const possiveisCores:string[] = ["Azul", "Amarelo", "Verde", "Vermelho"];
                let corEscolhida:string = "";
                while (!possiveisCores.includes(corEscolhida)) {
                    console.log("1. Verde")
                    console.log("2. Vermelho")
                    console.log("3. Azul")
                    console.log("4. Amarelo")
                    const opcao:number = rs.questionInt("Selecione uma opcao: ")
                    switch (opcao) {
                        case 1: corEscolhida = "Verde"
                        break;
                        case 2: corEscolhida = "Vermelho"
                        break;
                        case 3: corEscolhida = "Azul"
                        break;
                        case 4: corEscolhida = "Amarelo"
                        break;
                        default: console.log("Opção inválida.")
                    }
                }
                carta.setCor(corEscolhida)
                for (let i=0; i < 4; i++) {
                    alvo.receberCarta(this.baralhoCompra, true);
                }
            } else {
                for (let i=0; i < 2; i++) {
                    alvo.receberCarta(this.baralhoCompra, true);
                }
            }

        }
        else {
            return
        }        
    }

    menu():void {
        while (true) {
            console.log("==================== UNO! =======================\n")
            console.log("1. Jogar")
            console.log("2. Criação dos Jogadores")
            console.log("0. Sair\n")
            const opcao = rs.questionInt("Selecione uma opcao: ")
            switch(opcao) {
            case 1:
                if (this.jogadores.length == 0) {
                    console.log("Nenhum jogador encontrado. Crie um novo jogador e tente novamente.")
                } else {
                    if(this.jogadores.length == 1) {
                        this.jogadores.push(new Computador("Computador"))
                    }
                    this.inicarJogo()
                }
                break;

            case 2:
                this.jogadores.length = 0;
                const qtdeJogadores = rs.questionInt("Insira a quantidade de jogadores (1-4): ")
                if (qtdeJogadores >= 1 && qtdeJogadores <= 4) {
                    for (let i=0; i < qtdeJogadores; i++) {
                        const jogadorNome = rs.question(`Insira o nome do jogador ${i+1}: `)
                        this.jogadores.push(new Humano(jogadorNome))
                    }
                    console.log("Jogadores adicionados.")
                }
                break;
            }
        }
    }
}