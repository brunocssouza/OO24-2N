// Public: elemento pode ser acessado de qualquer escopo.
// Private: elemento só pode ser acessado de dentro de sua própria classe.
// Protected: elemento funciona como um Private, porém utilizada em HERANÇAS (extends).


export class Cat {
    public name:string;
    protected race:string;
    private weight:number;

    constructor(nameRecebido:string, raceRecebida:string, weightRecebido:number) {
        this.name = nameRecebido;
        this.race = raceRecebida;
        this.weight = weightRecebido
    };

    public getName():string {
        return this.name
    }

    public gritar():void {
        console.log("aaaaaaa")
    }

    protected getRace():string {
        return this.race
    }

    private getWeight():number {
        return this.weight
    }

    public getInfo():void {
        console.log(this.getName(), this.getRace(), this.getWeight())
    }

}

let cat1 = new Cat('algum nome', 'alguma raca', 20);
cat1.getInfo();
