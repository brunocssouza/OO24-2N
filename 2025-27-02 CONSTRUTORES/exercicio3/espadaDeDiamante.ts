// Crie uma classe EspadaDeDiamante com atributos como dano e durabilidade.

class EspadaDeDiamante {
    private dano:number;
    private durabilidade:number;

    constructor(danoRecebido:number, durabilidadeRecebida:number) {
        this.dano = danoRecebido;
        this.durabilidade = durabilidadeRecebida
    };

    info():void {
        console.log(`Dano: ${this.dano} | Durabilidade: ${this.durabilidade}`)
    }
};

let espadaDeDiamante1 = new EspadaDeDiamante(7, 100);
espadaDeDiamante1.info();
