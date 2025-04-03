import { Misc } from "./Misc";
import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    private idade:number
    private peso:number
    private altura:number
    private dataInscricao:number
    private presencas:number[] = []

    constructor(nomeRecebido:string, emailRecebido:string, idadeRecebida:number, pesoRecebido:number, alturaRecebida:number, dataInscricaoRecebida:string) {
        super(nomeRecebido, emailRecebido)
        this.idade = idadeRecebida
        this.peso = pesoRecebido
        this.altura = alturaRecebida
        this.dataInscricao = Misc.inverterData(dataInscricaoRecebida)
    }

    getFrequencia():string {

        if (this.presencas) {
            const diasTotais:number = this.presencas[this.presencas.length-1] - this.dataInscricao;

            let faltas:number = 0;
            for (let i=0; i < this.presencas.length; i++) {
                if (this.presencas[i+1]) {
                    const difPresencas:number = this.presencas[i+1] - this.presencas[i] - 1;

                    if (difPresencas > 0) {
                        faltas = faltas + difPresencas;
                    }
                }   
            }
            console.log("Faltas:", faltas)
            const frequencia:number = 100-faltas/diasTotais*100

            return `${Misc.arredondar2Decimais(frequencia)}%`;

        } else {
            return "0%";
        }
    }

    getNome():string {
        return this.nome
    }

    getIdade():number {
        return this.idade
    }
    
    getPeso():number {
        return this.peso
    }

    getAltura():number {
        return this.altura
    }

    getDataInscricao():number {
        return this.dataInscricao
    }


    //
    calcularIMC():number {
        return Misc.arredondar2Decimais(this.peso/Math.pow(this.altura, 2))
    }

    marcarPresenca(dataRecebida:number):void {
        this.presencas.push(dataRecebida)
    }
}