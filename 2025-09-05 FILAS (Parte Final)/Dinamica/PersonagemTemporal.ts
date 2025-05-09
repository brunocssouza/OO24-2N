export class PersonagemTemporal {
    private nome:string
    private universo:string
    private assinaturaTemporal:number = 0   // Numero ordem de chegada

    constructor(nome:string, universo:string) {
        this.nome = nome
        this.universo = universo
    }

    public getNome():string {
        return this.nome
    }

    public getUniverso():string {
        return this.universo
    }

    public getAssinaturaTemporal():number {
        return this.assinaturaTemporal
    }

    public setAssinaturaTemporal(assinaturaTemporal:number):void {
        this.assinaturaTemporal = assinaturaTemporal
    }

    public exibirInfo() {
        console.table(this)
    }
}