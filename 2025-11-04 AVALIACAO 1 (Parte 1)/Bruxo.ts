import { CriaturaMagica } from "./CriaturaMagica";
import { Feitico } from "./Feitico";

export class Bruxo extends CriaturaMagica {

    private varinha:string
    private casa:string
    private habilidades:Feitico[]   // Feitiços que possui
    private poderMagico:number  // Dano do Bruxo

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string, varinhaRecebida:string, casaRecebida:string, habilidadesRecebidas:Feitico[], poderMagicoRecebido:number) {
        super(nomeRecebido, tipoRecebido, poderRecebido)
        this.varinha = varinhaRecebida
        this.casa = casaRecebida
        this.habilidades = habilidadesRecebidas
        this.poderMagico = poderMagicoRecebido
    }

    usarMagia() {
        
    }

    lançarFeitiço() {

    }


}