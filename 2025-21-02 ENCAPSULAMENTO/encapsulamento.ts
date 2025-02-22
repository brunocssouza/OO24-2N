export class Cat{
    nomeGato:string = "";
    pesoGato:number = 0;

    // Métodos que fazem encapsulamento
    setName(nomeGatoRecebido:string):void {
        this.nomeGato = nomeGatoRecebido
    }

    meow():void {
        console.log("Meow Meow")
    };

    eat(quantity:number):void {
        console.log("The cat has eaten", quantity)
    }
}

