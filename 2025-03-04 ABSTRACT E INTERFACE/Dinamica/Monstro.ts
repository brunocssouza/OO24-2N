import { Habilidade } from "./Habilidade"
import { Cacador } from "./Cacador"

export class Monstro {
    private nome:string
    private hpMaximo:number
    private hpAtual:number;
    private habilidades:Habilidade[]
    private habilidadeEquipada:Habilidade


    constructor(nomeRecebido:string, hpMaximoRecebido:number, habilidadesRecebidas:Habilidade[]) {
        this.nome = nomeRecebido
        this.hpMaximo = this.hpAtual = hpMaximoRecebido
        this.habilidades = habilidadesRecebidas
        this.habilidadeEquipada = habilidadesRecebidas[0]
    }

    getNome():string {
        return this.nome
    }

    getHPMaximo():number {
        return this.hpMaximo
    }

    getHPAtual():number {
        return this.hpAtual
    }

    getHabilidadeEquipada():Habilidade {
        return this.habilidadeEquipada
    }

    getHabilidades():Habilidade[] {
        return this.habilidades
    }

    setHPAtual(valorRecebido:number):void {
        this.hpAtual = valorRecebido
    }

    atualizarHP(valorRecebido:number) {
        this.hpAtual = this.hpAtual + valorRecebido
    }

    equiparHabilidade(habilidadeRecebida:Habilidade):void {
        if (this.habilidades.includes(habilidadeRecebida)) {
            this.habilidadeEquipada = habilidadeRecebida
            console.log(`> A habilidade ${habilidadeRecebida.nome} foi equipada.`)

        } else {
            console.log(`[✗] Este caçador não possui a habilidade ${habilidadeRecebida.nome}.`)
        }
    }

    usarHabilidadeEquipada(alvoRecebido:Monstro|Cacador):void {
        if (this.habilidadeEquipada.tipo == "Ofensivo") {
            this.habilidadeEquipada.ativar(alvoRecebido)

        } else {
            this.habilidadeEquipada.ativar(this)
        }
    }

    exibirDetalhes():void {
        console.log(`====================== DETALHES DE ${this.nome.toUpperCase()} ======================`)
        console.log(`Nome: ${this.nome} \nHP: ${this.hpAtual}/${this.hpMaximo} \nHabilidade Equipada: ${this.habilidadeEquipada.nome} \n`)
        console.log("Lista de habilidades:")
        console.table(this.habilidades)
    }

}