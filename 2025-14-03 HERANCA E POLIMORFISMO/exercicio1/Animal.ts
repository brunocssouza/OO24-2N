export class Animal {
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
    private static inventario:string[] = [];

    constructor(nomeRecebido:string, especieRecebida:string, fomeRecebida:boolean, sedeRecebida:boolean, alimentacaoRecebida:string, habitoRecebido:string) {
        this.nome = nomeRecebido;
        this.especie = especieRecebida;
        this.fome = fomeRecebida;
        this.sede = sedeRecebida;
        this.alimentacao = alimentacaoRecebida;
        this.habito = habitoRecebido;
    }

    // Métodos Setters
    public static setInventario(inventarioRecebido:string[]):void {
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
    public static getInventario():string[] {
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
    public buscarRecurso(): boolean {
        console.log(`> ${this.nome} (${this.especie}) está à ${this.habito.toLowerCase()}...`);
        return this.verficarLoot();
    }

    private verficarLoot(): boolean {
        const achouLoot = Math.floor(Math.random() * 2);
        if (achouLoot == 1) {
            const possivelLoot = ["Água", "Banana", "Peixe", "Galhos", "Espelho", "Colher"];
            const indexAleatorio = Math.floor(Math.random() * possivelLoot.length);
            const lootObtido = possivelLoot[indexAleatorio];
            Animal.inventario.push(lootObtido);

            console.log(`[✔] ${this.nome} encontrou ${lootObtido}!`, '\n');
            return true;
            
        } else {
            
            console.log(`[✗] ${this.nome} não encontrou nada.`, '\n');
            return false;
        }
    }

    protected emitirSom(): void {
        console.log(`> ${this.nome} (${this.especie}) fez barulho!`, '\n');
    }

    public mover(): void {
        if (this.sede) {
            console.log(`> ${this.nome} (${this.especie}) tentou se mover, porém está com sede!`, '\n');
        } else {
            console.log(`> ${this.nome} (${this.especie}) se moveu!`, '\n');
            this.sede = true;
        }
    }

    public descansar():void {
        console.log(`> ${this.nome} (${this.especie}) acaba de descansar. Sua fome e sede foram revigoradas!`, '\n');
        this.sede = false;
        this.fome = false;
    }
}
