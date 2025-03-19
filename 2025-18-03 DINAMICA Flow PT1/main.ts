import { Animal } from "./Animal";
import { Mamifero } from "./Mamifero";  // Todos os mamíferos instanciados se encontram no arquivo Mamifero.
import { Recurso } from "./Recurso";    // Todos os recursos instanciados se encontram no arquivo Recurso.

console.log("========== [FUNÇÃO INTERAGIR] ==========")
function interagir(animalRecebido1: Animal, animalRecebido2: Animal):void {     // Polimorfose
    console.log(`${animalRecebido1.getNome()} interagiu com ${animalRecebido2.getNome()}:`);
    console.log(animalRecebido1.emitirSom());
    console.log(animalRecebido2.emitirSom(), '\n');

    animalRecebido1.buscarRecurso();
    animalRecebido2.buscarRecurso();
}
interagir(Mamifero.getMamiferos()[0], Mamifero.getMamiferos()[1]);

// Desafio
function indexAleatorio(listaRecebida: Mamifero[] | Recurso[]) {
    return Math.floor(Math.random() * listaRecebida.length);
}

function acoes(mamiferos:Mamifero[]) {
    const recursos:Recurso[] = Recurso.getRecursos();
    mamiferos[indexAleatorio(mamiferos)].usarRecurso(recursos[indexAleatorio(recursos)]);

    mamiferos[indexAleatorio(mamiferos)].mover();

    mamiferos[indexAleatorio(mamiferos)].amamentar();

    mamiferos[indexAleatorio(mamiferos)].mudarPelo();
}

console.log("============ [FUNÇÃO SIMULAR] ============");
function simular(qtde:number = 10) {
    for (let i=0; i < qtde; i++) {
        console.log(`=============== ITERAÇÃO ${i+1} ===============`);
        
        const mamiferos:Mamifero[] = Mamifero.getMamiferos();
        const animalAleatorio1:Mamifero = mamiferos[indexAleatorio(mamiferos)];
        let animalAleatorio2:Mamifero = mamiferos[indexAleatorio(mamiferos)];
        while (animalAleatorio1 == animalAleatorio2) {
            animalAleatorio2 = mamiferos[indexAleatorio(mamiferos)];
        }
    
        interagir(animalAleatorio1, animalAleatorio2);
        acoes(mamiferos);
    }
}
simular(5);

console.log(`========== RECURSOS OBTIDOS ==========`);
console.table(Animal.getInventario(), ["nome"]);
