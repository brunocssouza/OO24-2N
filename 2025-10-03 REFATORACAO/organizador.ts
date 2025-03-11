import { Distrito } from "./distrito";

export class Organizador {
    private nome: string;
    private distritos: Distrito[]

    constructor(nomeRecebido: string, distritosRecebidos: Distrito[]) {
        this.nome = nomeRecebido;
        this.distritos = distritosRecebidos;        
    }

    public setNome(nomeRecebido: string): void {
        this.nome = nomeRecebido;
    }

    public setDistritos(distritosRecebidos: Distrito[]): void {
        this.distritos = distritosRecebidos;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDistritos(string:boolean = false):Distrito[] {
        return this.distritos;
    }

    public exibirDistritos():string {
        let distritosNomes:string[] = [];
        for (let distrito of this.distritos) {
            distritosNomes.push(distrito.getNome())
        }
        return distritosNomes.join(", ")
    }

    public liberarAnimais(): void {
        const distritoAleatorio = Math.floor(Math.random() * this.distritos.length);
        console.log(`O Organizador ${this.nome} soltou animais no Distrito ${this.distritos[distritoAleatorio].getNome()}! Corra!`)
    }

    public criarDesastre(): void {
        let listaDesastre = ['Chuva Ácida', 'Terremoto', 'Fumaça Tóxica', 'Lanças de Fogo']
        const desastreAleatorio = Math.floor(Math.random() * listaDesastre.length);
        const distritoAleatorio = Math.floor(Math.random() * this.distritos.length);
        console.log(`O Organizador ${this.nome} liberou o desastre ${listaDesastre[desastreAleatorio]} no Distrito ${this.distritos[distritoAleatorio].getNome()}!`)
    }
}
