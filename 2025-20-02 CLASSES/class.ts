export class Cat{
    name:string;
    weight:number;

    constructor(name:string, weight:number) {
        this.name = name
        this.weight = weight
    }

    meow():void {
        console.log("Meow Meow")
    };

    eat(quantity:number):void {
        console.log("The cat has eaten", quantity)
    }
}



let gato1 = new Cat("Destruidor de Mundos", 54);
console.log(gato1.name)
gato1.meow()
gato1.eat(300)
