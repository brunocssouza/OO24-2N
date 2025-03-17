import { Animal } from "./Animal";

export class Cachorro extends Animal {
    
    constructor(nomeRecebido:string, idadeRecebida:number) {
        super(nomeRecebido, idadeRecebida)
    }

    public latir():void {
        this.fazerBarulho()
    }
}
