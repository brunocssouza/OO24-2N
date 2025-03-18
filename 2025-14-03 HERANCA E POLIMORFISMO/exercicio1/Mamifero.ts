import { Animal } from "./Animal";

export class Mamifero extends Animal {
    private pelos:string;
    private mamas:number;
    private som:string;

    constructor(nomeRecebido:string, especieRecebida:string, fomeRecebida:boolean, sedeRecebida:boolean, alimentacaoRecebida:string, habitoRecebido:string, pelosRecebidos:string, mamasRecebidas:number, somRecebido:string) {
        super(nomeRecebido, especieRecebida, fomeRecebida, sedeRecebida, alimentacaoRecebida, habitoRecebido);
        this.pelos = pelosRecebidos;
        this.mamas = mamasRecebidas;
        this.som = somRecebido;
    }

    // Métodos Setters
    public setPelos(pelosRecebidas:string):void {
        this.pelos = pelosRecebidas;
    }
    public setMamas(mamasRecebido:number):void {
        this.mamas = mamasRecebido;
    }
    public setSom(somRecebido:string):void {
        this.som = somRecebido;
    }

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

    // Métodos diversos
    

    public emitirSomMamifero():void {
        let emitirSoms = this.emitirSom()
        console.log(`${emitirSoms} ${this.som.toUpperCase()}`, '\n');
    }

    public amamentar() {
        if (this.fome) {
            console.log(`> ${this.nome} (${this.especie}) não conseguiu amamentar pois está com fome!`, '\n');
        } else {
            console.log(`> ${this.nome} (${this.especie}) está amamentando seus filhotes.`, '\n');
            this.fome = true;
        }
    }

    public mudarPelo() {
        if (this.pelos == "Pouco") {
            console.log(`> ${this.nome} (${this.especie}) está crescendo seu pelo.`, '\n');
            this.pelos = "Muito";
        }
    }
}
