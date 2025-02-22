import { Cat } from "./encapsulamento";

export class User {
    private userNome:string = "";
    private userCat:Cat;

    setUsarNome(nomeRecebido:string):void {
        this.userNome = nomeRecebido
        console.log(`Nome do usuario: ${this.userNome}`)
    };

    setUserCat(catRecebido:Cat):void {
        this.userCat = catRecebido
        console.log(`Nome do gato do usuário ${this.userNome}: ${this.userCat}`)
    };

    addTask():void{
        console.log("Tarefa adicionada!")
    };
}

const userLucas = new User();
userLucas.setUsarNome("Lucas");


const userGato = new Cat();
userGato.setName("O miozin");


