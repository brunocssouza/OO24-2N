import { Animal } from "./Animal";
import { Mamifero } from "./Mamifero";

const mamifero1 = new Mamifero(
    "Protagonista",                                 //nome
    "Capivara",                                     //espécie
    true,                                           //sede
    true,                                           //fome
    "Herbívoro",                                    //alimentacao 
    "Explorar a vegetação procurando ao arredor",   //habito
    "Muito",                                        //qtdePelos
    4,                                              //qtdeMamas
    "Ahn Ahn"                                       //Onomatopéia
);
const mamifero2 = new Mamifero(
    "Pão",
    "Cachorro", 
    true, 
    false, 
    "Onívoro", 
    "Correr pelo gramado querendo brincar", 
    "Muito", 
    8,
    "Au Au"
);
const mamifero3 = new Mamifero(
    "Precioso", 
    "Lêmure", 
    false, 
    true, 
    "Onívoro", 
    "Pular de árvore em árvore", 
    "Pouco", 
    4,
    "Hiii-Hiii"
);


Animal.getInventario

// Exemplo de um tipo de polimorfose

function interagir(animalRecebido1: Animal, animalRecebido2: Animal) {
    const buscarRecurso1 = animalRecebido1.buscarRecurso()
    const buscarRecurso2 = animalRecebido2.buscarRecurso()

    if (buscarRecurso1 || buscarRecurso2) {
        console.log("Inventário atual dos animais:"), console.table(Animal.getInventario());
    }
}

for (let i=0; i < 10; i++) {
    interagir(mamifero1, mamifero2);
}


mamifero1.amamentar();
mamifero3.emitirSomMamifero();
mamifero2.mudarPelo();
mamifero1.mover();
