import { Distrito} from "./distrito";
import { Habilidade } from "./habilidade";

export class Tributo {
    private nome: string;
    private saude: number;
    private distrito: Distrito;
    private segredo: string;
    private habilidades: Habilidade[];
    private resistencia: number;
    private armadura: number;

    constructor(nomeRecebido: string, saudeRecebida: number, distritoRecebido: Distrito, segredoRecebido: string, habilidadesRecebidas: Habilidade[], resistenciaRecebida: number, armaduraRecebida: number) {
        this.nome = nomeRecebido;
        this.saude = saudeRecebida;
        this.distrito = distritoRecebido;
        this.segredo = segredoRecebido;
        this.habilidades = habilidadesRecebidas;
        this.resistencia = resistenciaRecebida
        this.armadura = armaduraRecebida
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

    public setHabilidades(habilidadesRecebidas: Habilidade[]): void {
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

    public getHabilidades(): void {

        for (let i = 0; i < this.habilidades.length; i++) {
            console.log(this.habilidades[i].getNome())
        }
    }

    public sofrerDano(danoRecebido: number): void {
        const dano = this.calcularDano(danoRecebido)
        if (dano > 0) {
            this.saude = this.saude - dano
            console.log(`${this.nome} sofreu ${dano} de dano! Sua saúde agora é ${this.saude}.`)
        } else {
            console.log(`A armadura e resistência de ${this.nome} foi superior ao dano recebido. Saúde não alterada.`)
        }
    }

    private calcularDano(danoRecebido:number): number {
        const dano:number = danoRecebido-(this.armadura+this.resistencia)
        if (dano > 0) {
            return dano
        } else {
            return 0;
        }
    }



}