import { Casa } from "./Casa";
import { CriaturaMagica } from "./CriaturaMagica";
import { Feitico } from "./Feitico";
import { Misc } from "./Misc";

export class Bruxo extends CriaturaMagica {
    private varinha:string
    private casa:Casa
    private habilidades:Feitico[]   // Feitiços que possui
    private poderMagico:number      // Dano do Bruxo

    constructor(nomeRecebido:string, hpRecebido:number, tipoRecebido:string, poderRecebido:string, varinhaRecebida:string, casaRecebida:Casa, habilidadesRecebidas:Feitico[], poderMagicoRecebido:number) {
        super(nomeRecebido, hpRecebido, tipoRecebido, poderRecebido)
        this.varinha = varinhaRecebida
        this.casa = casaRecebida
        this.habilidades = habilidadesRecebidas
        this.poderMagico = poderMagicoRecebido
    }

    getCasa():Casa {
        return this.casa
    }
    getPoderMagico():number {
        return this.poderMagico
    }
    getVarinha():string {
        return this.varinha
    }
    getHabilidades():Feitico[] {
        return this.habilidades
    }

    // Serve somente para chamar o método 'lançar' de um feitiço recebido.
    lançarFeitiço(feiticoRecebido:Feitico):void {
        feiticoRecebido.lançar()
    }
    
    // 1. Recebe um feitiço como parâmetro (primeiramente verificando se o Bruxo possui o mesmo)
    // 2. Chama 'lançarFeitiço'
    // 3. Retorna: (o dano base do Feitiço) + (o poder mágico do Bruxo)
    usarMagia(feiticoRecebido:Feitico):number {
        if (this.habilidades.includes(feiticoRecebido)) {
            console.log(`${this.nome} está conjurando uma magia...`)
            this.lançarFeitiço(feiticoRecebido)
            return this.poderMagico+feiticoRecebido.getDano()
        }
        console.log(`${this.nome} não possui o feitiço especificado!`)
        return 0;
    }
}

// Instâncias
// 0: "Grifinória"
// 1: "Sonserina"
// 2: "Corvinal"
// 3: "Lufa-Lufa"
const harry:Bruxo = new Bruxo(
    "Harry Potter",
    80,
    "Humano",
    "",
    "Azevinho e pena de fênix",
    Casa.getAll()[0],
    Misc.retornarElementosAleatorios(Feitico.getAll(), 2),
    Math.floor(Math.random() * 140)
);
const hermione:Bruxo = new Bruxo(
    "Hermione Granger",
    70,
    "Humano",
    "",
    "Madeira de videira e fibra de coração de dragão",
    Casa.getAll()[0],
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
const voldemort:Bruxo = new Bruxo(
    "Lord Voldemort",
    120,
    "Humano",
    "",
    "Teixo e pena de fênix",
    Casa.getAll()[1],
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
const malfoy:Bruxo = new Bruxo(
    "Draco Malfoy",
    75,
    "Humano",
    "",
    "Madeira de pilriteiro e pelo de unicórnio",
    Casa.getAll()[1],
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
const cedrico:Bruxo = new Bruxo(
    "Cedrico Diggory",
    70,
    "Humano",
    "",
    "Freixo e pelo de unicórnio",
    Casa.getAll()[3],
    Misc.retornarElementosAleatorios(Feitico.getAll(), 3),
    Math.floor(Math.random() * 150)
);
