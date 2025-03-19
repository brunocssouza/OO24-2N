import { Animal } from "./Animal";

export class Mamifero extends Animal {
    private pelos:string;
    private mamas:number;
    private som:string;
    private static mamiferos:Mamifero[] = [];   // Vai armazenar todo mamífero criado já instanciado. Beneficios do static-array 'mamíferos':
    // 1. Tira a necessidade de objetos Mamífero serem instanciados no arquivo principal (main.ts); tornando-o mais limpo.
    // 2. Qualquer mamífero criado pode ser acessado a partir de uma única variável array.
    // 3. Pode ser acessado diretamente pela classe, não necessitando instanciar um objeto Mamifero para tal.

    constructor(nomeRecebido:string, especieRecebida:string, fomeRecebida:boolean, sedeRecebida:boolean, alimentacaoRecebida:string, habitoRecebido:string, pelosRecebidos:string, mamasRecebidas:number, somRecebido:string) {
        super(nomeRecebido, especieRecebida, fomeRecebida, sedeRecebida, alimentacaoRecebida, habitoRecebido);
        this.pelos = pelosRecebidos;
        this.mamas = mamasRecebidas;
        this.som = somRecebido;
        Mamifero.mamiferos.push(this)   // Armazena o próprio Mamífero à ser criado no array 'mamiferos'.
    }

    // Métodos Setters
    public setPelos(pelosRecebidos:string):void {
        this.pelos = pelosRecebidos;
    }
    public setMamas(mamasRecebidas:number):void {
        this.mamas = mamasRecebidas;
    }
    public setSom(somRecebido:string):void {
        this.som = somRecebido;
    }
    public static setMamiferos(mamiferosRecebidos:Mamifero[]) {
        this.mamiferos = mamiferosRecebidos
    };

    // Métodos Getters
    public getPelos():string {
        return this.pelos;
    }
    public getMamas():number {
        return this.mamas;
    }
    public getSom():string {
        return this.som;
    }
    public static getMamiferos():Mamifero[] {
        return this.mamiferos;
    }

    // Métodos diversos
    public emitirSom():string {
        return `> ${this.nome} (${this.especie}): ${this.som.toUpperCase()}!`;
    }

    public amamentar():void {
        console.log(`> ${this.nome} (${this.especie}) quer amamentar seus filhotes...`)
        if (this.fome) {
            console.log(`[✗] ${this.nome} (${this.especie}) não conseguiu amamentar pois está faminto!`, '\n');
        } else {
            this.fome = true;
            console.log(`[✔] ${this.nome} (${this.especie}) está amamentando.`, '\n');
        }
    }

    public mudarPelo():void {
        if (this.pelos == "Pouco") {
            this.pelos = "Muito";
            console.log(`> ${this.nome} (${this.especie}) está crescendo seu pelo.`, '\n');
        } else {
            this.pelos = "Pouco";
            console.log(`> ${this.nome} (${this.especie}) está reduzindo seu pelo.`, '\n');
        }
    }
}

const mamifero1 = new Mamifero(
    "Protagonista",                                 //nome
    "Capivara",                                     //espécie
    true,                                           //sede
    true,                                           //fome
    "Herbívoro",                                    //alimentacao 
    "Explorar a vegetação procurando ao arredor",   //habito
    "Muito",                                        //qtdePelos
    4,                                              //qtdeMamas
    "Ahn Ahn"                                       //onomatopeia
);
const mamifero2 = new Mamifero(
    "Pão",
    "Cachorro", 
    true, 
    false, 
    "Onívoro", 
    "Correr pelo gramado querendo brincar", 
    "Muito", 
    8,
    "Au Au"
);
const mamifero3 = new Mamifero(
    "Precioso", 
    "Lêmure", 
    false, 
    true, 
    "Onívoro", 
    "Pular de árvore em árvore", 
    "Pouco", 
    4,
    "Hiii-Hiii"
);
const mamifero4 = new Mamifero(
    "Flow", 
    "Gato", 
    false, 
    true, 
    "Carnívoro", 
    "Escalar um edifício", 
    "Muito", 
    8,
    "Meow Meow"
);
const mamifero5 = new Mamifero(
    "Pocotó",
    "Veado",
    false,
    false,
    "Herbívoro",
    "Percorrer rapidamente na floresta",
    "Pouco",
    4,
    "Oohn Roon"
);
