export class PersonagemTemporal {
    private nome:string
    private universo:string
    private assinaturaTemporal:number

    constructor(nome:string, universo:string, assinaturaTemporal:number) {
        this.nome = nome
        this.universo = universo
        this.assinaturaTemporal = assinaturaTemporal
    }

    public getAssinaturaTemporal():number {
        return this.assinaturaTemporal
    }

    public exibirInfo() {
        console.table(this)
    }
}