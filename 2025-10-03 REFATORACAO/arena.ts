import { Distrito } from "./distrito";
import { Tributo } from "./tributo";
import { Organizador } from "./organizador";

const distrito1 = new Distrito('1', ['Ferro'], 30);
const distrito2 = new Distrito('2', ['Mel'], 45);
const distrito3 = new Distrito('3', ['Grãos'], 50);

const tributo1 = new Tributo('José', 98, distrito2, 'Escondeu irmão no dia da Seleção', ['Agilidade', 'Atirador de Facas']);
const tributo2 = new Tributo('Paola', 75, distrito1, 'Roubou a padaria do José', ['Força', 'Arco e Flecha']);
const tributo3 = new Tributo('Arthur', 70, distrito3, 'Espião', ['Manipulação', 'Furtividade'])

// Inicialização de instancia de classe Organizador
const organizador1 = new Organizador('Alexander', [distrito1, distrito2, distrito3])

console.log('===================== [DISTRITOS] =====================')

let listaDistritos = [distrito1, distrito2, distrito3]
for (let distrito of listaDistritos) {
    console.log(`====== Informações do Distrito ${distrito.getNome()} ====== \nPopulação: ${distrito.getPopulacao()} \nRecursos: ${distrito.getRecursos()}\n`)
}

console.log('===================== [TRIBUTOS] =====================')

let listaTributos = [tributo1, tributo2, tributo3]
for (let tributo of listaTributos) {
    console.log(`====== Informações de ${tributo.getNome()} ====== \nSaúde: ${tributo.getSaude()} \nDistrito: ${tributo.getDistrito().getNome()} \nSegredo: ${tributo.getSegredo()} \nHabilidades: ${tributo.getHabilidades()}\n`)
}

console.log('===================== [ORGANIZADOR] =====================')
console.log(`====== Informações de ${organizador1.getNome()} ====== \nDistritos:`)

console.log(organizador1.getDistritosNomes())

organizador1.criarDesastre();
organizador1.liberarAnimais();
