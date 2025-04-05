import { Cacador } from "./Cacador"
import { Monstro } from "./Monstro"


export interface Habilidade {
    nome:string
    tipo:string

    getValor():number;

    ativar(alvo:Monstro|Cacador):void;

    calcularDano(alvo:Cacador|Monstro):number;

    exibirDescricao():void;
}