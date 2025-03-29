export class Recurso {
    private nome:string
    private funcao:string
    private quantidade:string
    private static recursos:Recurso[] = []; // STATIC!!

    constructor(nomeRecebido:string, funcaoRecebida:string, quantidadeRecebida:string) {
        this.nome = nomeRecebido;
        this.funcao = funcaoRecebida;
        this.quantidade = quantidadeRecebida;
        Recurso.recursos.push(this);    // Armazena o próprio Recurso à ser criado no array 'recurso'.
    }

    // Métodos Setters
    public setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido;
    }
    public setFuncao(funcaoRecebido:string):void {
        this.funcao = funcaoRecebido;
    }
    public setQuantidade(quantidadeRecebida:string):void {
        this.quantidade = quantidadeRecebida;
    }
    public static setRecursos(recursosRecebidos:Recurso[]):void {
        this.recursos = recursosRecebidos
    }
    
    // Métodos Getters
    public getNome():string {
        return this.nome;
    }
    public getFuncao():string {
        return this.funcao;
    }
    public getQuantidade():string {
        return this.quantidade;
    }
    public static getRecursos():Recurso[] {
        return this.recursos
    }
}

const recurso1 = new Recurso ("Água", "beber", "vários litros de");
const recurso2 = new Recurso ("Bananas", "comer", "muitas");
const recurso3 = new Recurso ("Espelho", "se olhar", "em um");
const recurso4 = new Recurso ("Galho", "brincar", "com um");
const recurso5 = new Recurso ("Peixes", "comer", "alguns");