import { Distrito } from "./distrito";

export class Tributo {
    private nome: string;
    private saude: number;
    private distrito: Distrito;
    private segredo: string;
    private habilidades: string[];

constructor(nome: string, saude: number, distrito: Distrito, segredo: string, habilidades: string[]) {
    this.nome = nome;
    this.saude = saude;
    this.distrito = distrito;
    this.segredo = segredo;
    this.habilidades = habilidades;
}

public setNome(nomeRecebido: string): void {
    this.nome = nomeRecebido;
}

public setSaude(saudeRecebida: number): void {
    this.saude = saudeRecebida;
}

public setDistrito(distritoRecebido: Distrito): void {
    this.distrito = distritoRecebido;
}

public setSegredo(segredoRecebido: string): void {
    this.segredo = segredoRecebido;
}

public setHabilidades(habilidadesRecebidas: string[]): void {
    this.habilidades = habilidadesRecebidas;
}

public getNome(): string {
    return this.nome;
}

public getSaude(): number {
    return this.saude;
}

public getDistrito(): Distrito {
    return this.distrito;
}

public getSegredo(): string {
    return this.segredo;
}

public getHabilidades(): string[] {
    return this.habilidades;
}

}