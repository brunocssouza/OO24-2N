import { CriaturaMagica } from "./CriaturaMagica";
import { Feitico } from "./Feitico";
import { Misc } from "./Misc";

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

    getPoderMagico():number {
        return this.poderMagico
    }

    getHabilidades():Feitico[] {
        return this.habilidades
    }

    usarMagia(feiticoRecebido:Feitico):number {
        if (this.habilidades.includes(feiticoRecebido)) {
            console.log(`${this.nome} está conjurando uma magia...`)
            this.lançarFeitiço(feiticoRecebido)
            return this.poderMagico+feiticoRecebido.getDano()
        }
        console.log(`${this.nome} não possui o feitiço especificado!`)
        return 0;
    }

    lançarFeitiço(feiticoRecebido:Feitico):void {
        feiticoRecebido.lançar()
    }
}

// Instâncias
const harry:Bruxo = new Bruxo(
    "Harry Potter",
    "Humano",
    "",
    "Azevinho e pena de fênix",
    "Grifinória",
    Misc.retornarElementosAleatorios(Feitico.getAll(), 2),
    Math.floor(Math.random() * 140)
);
const voldemort:Bruxo = new Bruxo(
    "Lord Voldemort",
    "Humano",
    "",
    "Teixo e pena de fênix",
    "Sonserina",
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);