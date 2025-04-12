export abstract class CriaturaMagica {
    private nome:string
    private tipo:string         // Exemplo: Voador.
    private poder:string        // Exemplo: Soltar fogo. (Se for Bruxo, deixar nulo)

    constructor(nomeRecebido:string, tipoRecebido:string, poderRecebido:string) {
        this.nome = nomeRecebido
        this.tipo = tipoRecebido
        this.poder = poderRecebido  
    }

    abstract usarMagia():void;  // Se bruxo, esse método será usado dentro de lancarFeitiço() da classe Bruxo.
}