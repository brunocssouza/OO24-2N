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

    public setArmadura(armaduraRecebida: number):void {
        this.armadura = armaduraRecebida
    }

    public setResistencia(resistenciaRecebida: number):void {
        this.resistencia = resistenciaRecebida
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

    public getHabilidades(): Habilidade[] {
        return this.habilidades;
    }

    public getArmadura():number {
        return this.armadura
    }

    public getResistencia():number {
        return this.resistencia
    }
    
    private calcularDano(danoRecebido:number): number {
        const dano:number = danoRecebido-(this.armadura+this.resistencia)
        return dano;
    }

    public sofrerDano(danoRecebido: number): void {
        const dano = this.calcularDano(danoRecebido)
        if (dano > 0) {
            if (dano >= this.saude) {
                console.log(`${this.nome} sofreu um dano fatal! Este personagem está morto. Saúde: ${this.saude} > ${this.saude - dano}`)
            } else {
                console.log(`${this.nome} sofreu ${dano} de dano! Saúde: ${this.saude} > ${this.saude - dano}`)
            }
            this.saude = this.saude - dano
        } else {
            console.log(`A armadura e resistência de ${this.nome} foi superior ao dano recebido. Saúde não alterada.`)
        }
    }

    public exibirHabilidades(): string {
        let habilidadesNomes:string[] = [];
        for (let habilidade of this.habilidades) {
            habilidadesNomes.push(habilidade.getNome())
        }
        return habilidadesNomes.join(", ")
    }

}