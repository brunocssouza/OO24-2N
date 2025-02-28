export class Pessoa {
    private nome!: string;
    private idade!: number;

    constructor(nomeRecebido: string, idadeRecebida: number) {
        if (idadeRecebida < 0) {
            console.log("A idade não pode ser um número negativo.");
        } else {
            this.nome = nomeRecebido;
            this.idade = idadeRecebida;
        }
    }
    
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let pessoa1 = new Pessoa("Bruno", 23);
pessoa1.apresentar();
