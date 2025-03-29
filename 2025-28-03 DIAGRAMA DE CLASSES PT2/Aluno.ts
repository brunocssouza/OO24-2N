import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    private idade:number
    private peso:number
    private altura:number
    private dataInscricao:number
    private presencas:number[] = []

    constructor(nomeRecebido:string, emailRecebido:string, idadeRecebida:number, pesoRecebido:number, dataInscricaoRecebida:number, alturaRecebida:number) {
        super(nomeRecebido, emailRecebido)
        this.idade = idadeRecebida
        this.peso = pesoRecebido
        this.dataInscricao = dataInscricaoRecebida
        this.altura = alturaRecebida
    }

    adicionarPresenca(dataRecebida:number):void {
        this.presencas.push(dataRecebida)
    }

    getFreqPresenca():number {
        // insc.    12012001
        // treino1  13012001


        let diasTotais = this.presencas[0]-this.presencas[this.presencas.length];
        let dataAnterior = this.presencas[0]
        for (let i=1; i < this.presencas.length; i++) {

            if (this.presencas[i] > dataAnterior) {
                
            }

            

        }

        return 2
    }

    getPeso():number {
        return this.peso
    }

    getAltura():number {
        return this.altura
    }


    calcularIMC():number {
        return this.peso/Math.pow(this.altura, 2)
    }

    marcarPresenca():void {
        this.
    }
}