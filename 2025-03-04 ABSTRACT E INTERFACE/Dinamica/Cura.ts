import { Cacador } from "./Cacador";
import { Habilidade } from "./Habilidade";
import { Monstro } from "./Monstro";

export class Cura implements Habilidade{
    nome:string;
    tipo:string;
    valor:number;
    descricao:string;

    constructor(nomeRecebido:string, tipoRecebido:string, valorRecebido:number, descricaoRecebida:string) {
        this.nome = nomeRecebido
        this.tipo = tipoRecebido
        this.valor = valorRecebido
        this.descricao = descricaoRecebida
    }

    getNome():string {
        return this.nome;
    }

    getValor():number {
        return this.valor;
    }

    exibirDescricao():void {
        console.log(`Esta é uma habilidade curativa de tipo ${this.tipo} chamada de ${this.nome} permitindo curar um aliado em ${this.valor} que se baseia em ${this.descricao.toLowerCase()}.`)
    }

    ativar(alvoRecebido:Cacador):void {
        console.log(`[✔] A habilidade ${this.nome} foi ativada, curando ${this.calcularDano(alvoRecebido)} do HP de ${alvoRecebido.getNome()}!`)
    }

    calcularDano(alvoRecebido:Cacador|Monstro):number {
        if (this.valor+alvoRecebido.getHPAtual() >= alvoRecebido.getHPMaximo()) {
            alvoRecebido.setHPAtual(alvoRecebido.getHPMaximo())
        } else {
            alvoRecebido.atualizarHP(this.valor)
        }
        return this.valor
    }

}