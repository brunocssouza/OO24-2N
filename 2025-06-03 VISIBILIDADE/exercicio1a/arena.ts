// Import das classes
import { Distrito } from "./distrito";
import { Tributo } from "./tributo";
import { Organizador } from "./organizador";


// Inicialização de instancias de classe Distrito
const distrito1 = new Distrito('1', ['Ferro'], 30);
const distrito2 = new Distrito('2', ['Mel'], 45);
const distrito3 = new Distrito('3', ['Grãos'], 50);

// Inicialização de instancias de classe Tributo
const tributo1 = new Tributo('José', 98, distrito2, 'Escondeu irmão no dia da Seleção', ['Agilidade', 'Atirador de Facas']);
const tributo2 = new Tributo('Paola', 68, distrito1, 'Roubou a padaria do José', ['Força', 'Arco e Flecha']);
const tributo3 = new Tributo('Arthur', 14, distrito3, 'Espião', ['Manipulação', 'Furtividade'])

// Inicialização de instancia de classe Organizador
const organizador1 = new Organizador('Alexander', [distrito1, distrito2, distrito3])


// Testando os métodos da classe Distrito
console.log('===================== [DISTRITOS] =====================')
let listaDistritos = [distrito1, distrito2, distrito3]
for (let i=0; i < listaDistritos.length; i++) {
    console.log(`====== Informações do Distrito ${listaDistritos[i].getNome()} ====== \nPopulação: ${listaDistritos[i].getPopulacao()} \nProduz: ${listaDistritos[i].getRecursos()}\n`)
}

// Testando os métodos da classe Tributo
console.log('===================== [TRIBUTOS] =====================')
let listaTributos = [tributo1, tributo2, tributo3]
for (let i=0; i < listaTributos.length; i++) {
    console.log(`====== Informações de ${listaTributos[i].getNome()} ====== \nSaúde: ${listaTributos[i].getSaude()} \nDistrito: ${listaTributos[i].getDistrito().getNome()} \nSegredo: ${listaTributos[i].getSegredo()} \nHabilidades: ${listaTributos[i].getHabilidades()}\n`)
}

// Testando os métodos da classe Organizador
console.log('===================== [ORGANIZADOR] =====================')
console.log(`====== Informações de ${organizador1.getNome()} ====== \nDistritos:`)
console.log(organizador1.getDistritos('nomes'), '\n')

organizador1.criarDesastre();
organizador1.liberarAnimais();
