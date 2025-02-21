export class Personagem {
    nome:string
    weapon:string
    strength:number
    classe:string
    health:number

    constructor (nome:string, weapon:string, strength:number, classe:string, health:number) {
        this.nome = nome
        this.weapon = weapon
        this.strength = strength
        this.classe = classe
        this.health = health
    }

    attack():void {
        console.log(`${this.nome} atacou com ${this.weapon}!`)
    }

    info():void {
        console.log(`Nome do personagem: ${this.nome}`)
        console.log(`Arma: ${this.weapon}`)
        console.log(`Forca: ${this.strength}`)
        console.log(`Classe: ${this.classe}`)
        console.log(`Vida: ${this.health}`)
    }
}

let warrior = new Personagem("OmiozinQtaTendo", "Espada de duas maos", 50, "Guerreriro", 100)
warrior.attack()
warrior.info()
