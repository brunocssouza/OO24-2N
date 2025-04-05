import { Cacador } from "./Cacador";
import { Habilidade } from "./Habilidade";
import { Monstro } from "./Monstro";

export class Magia implements Habilidade{
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
        return this.nome
    }

    getValor():number {
        return this.valor
    }

    exibirDescricao():void {
        console.log(`Esta é uma habilidade mágica de tipo ${this.tipo} chamada de ${this.nome} com dano base de ${this.valor} que se baseia em ${this.descricao.toLowerCase()}.`)
    }

    ativar(alvoRecebido:Monstro|Cacador):void {
        console.log(`[✔] A habilidade ${this.nome} foi ativada, causando ${this.calcularDano(alvoRecebido)} de dano mágico a ${alvoRecebido.getNome()}!`)
    }

    calcularDano(alvoRecebido:Cacador|Monstro):number {
        alvoRecebido.atualizarHP(-this.valor)
        return this.valor
    }

}