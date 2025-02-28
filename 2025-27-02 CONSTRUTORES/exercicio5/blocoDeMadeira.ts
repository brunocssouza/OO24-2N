// Crie uma classe BlocoDeMadeira com atributos como tipo (carvalho, pinheiro, etc.) e durabilidade.

export class BlocoDeMadeira {
    private tipo:string;
    private durabilidade:number;

    constructor(tipoRecebido:string, durabilidadeRecebida:number) {
        this.tipo = tipoRecebido;
        this.durabilidade = durabilidadeRecebida
    };

    info():void {
        console.log(`Tipo: ${this.tipo} | Durabilidade ${this.durabilidade}`)
    }
};

