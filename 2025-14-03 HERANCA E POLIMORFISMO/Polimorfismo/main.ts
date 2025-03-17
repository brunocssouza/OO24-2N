import { Cachorro } from "./Cachorro";
import { Animal } from "./Animal";

function fazerAcoes(animalRecebido: Animal) {
    animalRecebido.fazerBarulho();
}

const cachorro1 = new Cachorro("UmNomeTal", 10);

fazerAcoes(cachorro1);

