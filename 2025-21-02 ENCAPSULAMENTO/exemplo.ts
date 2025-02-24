import { Cat } from "./encapsulamento";

export class User {
    private userName!:string;
    private userCat!:Cat;

    setUsername(nomeRecebido:string):void {
        this.userName = nomeRecebido
        console.log(`Nome do usuario: ${this.userName}`)
    };

    setUserCat(catRecebido:Cat):void {
        this.userCat = catRecebido
        console.log(`Nome do gato do usuário ${this.userName}: ${this.userCat}`)
    };

    addTask():void{
        console.log("Tarefa adicionada!")
    };
}

const userLucas = new User();
userLucas.setUsername("Lucas");

const userGato = new Cat();
userGato.setName("O miozin");


