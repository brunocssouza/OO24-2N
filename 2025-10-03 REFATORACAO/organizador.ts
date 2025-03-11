import { Distrito } from "./distrito";

export class Organizador {
    private nome: string;
    private distritos: Distrito[]

    constructor(nome: string, distritos: Distrito[]) {
        this.nome = nome;
        this.distritos = distritos;        
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

public getDistritos(): Distrito[] {
    return this.distritos;
}

public getDistritosNomes(): string {
    let distritosNomes = [];
    for (let i=0; i < this.distritos.length; i++) {
        distritosNomes.push(this.distritos[i].getNome())
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
    console.log(`O Organizador ${this.nome} liberou o Desastre ${listaDesastre[desastreAleatorio]} no Distrito ${this.distritos[distritoAleatorio].getNome()}!`)
}

}
