import { Recurso } from "./Recurso";

export abstract class Animal {  // Abstract!!!
    protected nome:string;
    protected especie:string;
    protected fome:boolean;
    protected sede:boolean;
    protected alimentacao:string;
    protected habito:string; // No infinitivo!!!! (ex: "correr na grama", "pular e perseguir um pássaro")

    // STATIC: Elemento PERTENCE A CLASSE, não aos objetos. A variável 'inventario' pode ser acesada diretamente por fora, NÃO SENDO NECESSÁRIO INICIALIZAÇÃO
    // DE INSTANCIAS, utilizando a própria classe como objeto: Animal.inventario. O 'inventario' foi criado como STATIC pois a premissa é que um animal, 
    // sendo este derivado da classe Animal ou de suas subclasses, ao obter um recurso, este será armazenado em um inventário compartilhado; não sendo
    // necessário a criação de um inventário para cada um dos animais, por compartilharem dos mesmos itens.
    private static inventario:Recurso[] = [];

    constructor(nomeRecebido:string, especieRecebida:string, fomeRecebida:boolean, sedeRecebida:boolean, alimentacaoRecebida:string, habitoRecebido:string) {
        this.nome = nomeRecebido;
        this.especie = especieRecebida;
        this.fome = fomeRecebida;
        this.sede = sedeRecebida;
        this.alimentacao = alimentacaoRecebida;
        this.habito = habitoRecebido;
    }

    // Métodos Setters
    public static setInventario(inventarioRecebido:Recurso[]):void {
        Animal.inventario = inventarioRecebido;
    }
    public setNome(nomeRecebido:string):void {
        this.nome = nomeRecebido;
    }
    public setEspecie(especieRecebida:string):void {
        this.especie = especieRecebida;
    }
    public setFome(fomeRecebida:boolean):void {
        this.fome = fomeRecebida;
    }
    public setSede(sedeRecebida:boolean):void {
        this.sede = sedeRecebida;
    }
    public setAlimentacao(alimentacaoRecebida:string):void {
        this.alimentacao = alimentacaoRecebida;
    }
    public setHabito(habitoRecebido:string):void {
        this.alimentacao = habitoRecebido;
    }

    // Métodos Getters
    public static getInventario():Recurso[] {
        return Animal.inventario;
    }
    public getNome():string {
        return this.nome;
    }
    public getEspecie():string {
        return this.especie;
    }
    public getFome():boolean {
        return this.fome;
    }
    public getSede():boolean {
        return this.sede;
    }
    public getAlimentacao():string {
        return this.alimentacao;
    }
    public getHabito():string {
        return this.habito;
    }

    // Métodos diversos
    public buscarRecurso(): void {
        console.log(`> ${this.nome} (${this.especie}) está à ${this.habito.toLowerCase()}...`);

        const achouLoot = Math.floor(Math.random() * 2);                            // Aleatoriza de 0 a 1 para definir se o animal achou um item. 

        if (achouLoot == 1) {                                                       // Caso '1', o seguinte acontece:
            const recursos = Recurso.getRecursos();                                 // Pega a LISTA dos possíveis recursos.
            const indexAleatorio = Math.floor(Math.random() * recursos.length);     // Roleta um número de 0 até a QUANTIDADE-1 de possíveis recursos.
            const lootObtido = recursos[indexAleatorio];                            // Gera um aleatório recurso.
            Animal.inventario.push(lootObtido);                                     // Armazena o aleatório recurso gerado no atributo static 'inventario'.

            console.log(`[✔] ${this.nome} encontrou ${lootObtido.getNome()}!`, '\n');

        } else {                                                                    // Caso '0', somente uma mensagem aparece.
            console.log(`[✗] ${this.nome} não encontrou nada.`, '\n');
        }
    }

    public usarRecurso(recursoRecebido:Recurso):void {
        console.log(`> ${this.nome} deseja ${recursoRecebido.getNome()}...`)

        if (Animal.inventario.includes(recursoRecebido)) {                          //  Se, no inventário compartilhado, há o Recurso recebido:

            if (recursoRecebido.getFuncao() == "comer") {                           //      Se o recurso for comestível, o animal perde a fome. 
                this.fome = false;                                                              
            } else if (recursoRecebido.getFuncao() == "beber") {                    //      Se o recurso for bebível, o animal perde a sede.
                this.sede = false;
            }
            console.log(`[✔] Obteve a partir do inventário e está à ${recursoRecebido.getFuncao()} ${recursoRecebido.getQuantidade()} ${recursoRecebido.getNome()}!`, '\n');

        } else {                                                                    //  Caso contrário, somente uma mensagem aparece.
            console.log(`[✗] Porém não foi encontrado no inventário!`, '\n');
        }
    }


    // Abstract: É bem fácil! Simplesmente OBRIGA subclasses á terem seus próprios métodos 'emitirSom()'. Só isso.
    // Caso a subclasse não venha a implementar seu próprio, vai mostrar um sublinhado vermelho, como se tivesse um erro.
    // (Assim, também, a gente consegue reutilizar o mesmo nome de método. Nao precisando criar um 'emitirSomMamifero')
    public abstract emitirSom():void;

    public mover(): void {
        console.log(`> ${this.nome} (${this.especie}) tenta correr...`)

        if (this.sede) {                                                            // Se 'sede' for 'true', somente uma mensagem aparece.
            console.log(`[✗] Porém, por estar sedento, não foi capaz!`, '\n');
        } else {                                                                    // Caso contrário, 'sede' recebe 'true'.
            this.sede = true;                                                       
            console.log(`[✔] A hidratação está em dia! ${this.nome} começou a correr!`, '\n');
        }
    }
}
