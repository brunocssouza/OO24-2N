import { CriaturaMagica } from "./CriaturaMagica";
import { Feitico } from "./Feitico";

export class Bruxo extends CriaturaMagica {
    private varinha:string
    private casa:string
    private habilidades:Feitico[]   // Feitiços que possui
    private poderMagico:number      // Dano do Bruxo

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string, varinhaRecebida:string, casaRecebida:string, habilidadesRecebidas:Feitico[], poderMagicoRecebido:number) {
        super(nomeRecebido, tipoRecebido, poderRecebido)
        this.varinha = varinhaRecebida
        this.casa = casaRecebida
        this.habilidades = habilidadesRecebidas
        this.poderMagico = poderMagicoRecebido
    }

    getHabilidades():Feitico[] {
        return this.habilidades
    }

    getDano(feiticoRecebido:Feitico):number {
        return this.poderMagico + feiticoRecebido.getDano()
    }

    usarMagia(feiticoRecebido:Feitico):number {
        console.log(`${this.nome} está conjurando uma magia...`)
        this.lançarFeitiço(feiticoRecebido)
        return this.getDano(feiticoRecebido)
    }

    lançarFeitiço(feiticoRecebido:Feitico):void {
        feiticoRecebido.lançar()
    }






}