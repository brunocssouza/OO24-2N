// Crie uma classe Monstro com atributos como vida, poderDeExplosao e distanciaDeExplosao.

class Monstro {
    private vida:number;
    private poderDeExplosao:number;
    private distanciaDeExplosao:number;

    constructor(vidaRecebida:number, poderDeExplosaoRecebido:number, distanciaDeExplosaoRecebida:number) {
        this.vida = vidaRecebida;
        this.poderDeExplosao = poderDeExplosaoRecebido;
        this.distanciaDeExplosao = distanciaDeExplosaoRecebida
    }

    info():void {
        console.log(`Vida: ${this.vida} | Poder de Explosao: ${this.poderDeExplosao} | Distancia de Explosao: ${this.distanciaDeExplosao}`)
    }
}

let monstro1 = new Monstro(200, 8, 5);
monstro1.info();
