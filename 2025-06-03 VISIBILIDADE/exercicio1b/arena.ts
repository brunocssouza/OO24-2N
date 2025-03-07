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
// Forma 1: Implicito
console.log(`====== Informações do Distrito ${distrito1.getNome()} ====== \nPopulação: ${distrito1.getPopulacao()} \nProduz: ${distrito1.getRecursos()}\n`)
console.log(`====== Informações do Distrito ${distrito2.getNome()} ====== \nPopulação: ${distrito2.getPopulacao()} \nProduz: ${distrito2.getRecursos()}\n`)
console.log(`====== Informações do Distrito ${distrito3.getNome()} ====== \nPopulação: ${distrito3.getPopulacao()} \nProduz: ${distrito3.getRecursos()}\n`)
// Forma 2: Escalável
let listaDistritos = [distrito1, distrito2, distrito3]
for (let i=0; i < listaDistritos.length; i++) {
    console.log(`====== Informações do Distrito ${listaDistritos[i].getNome()} ====== \nPopulação: ${listaDistritos[i].getPopulacao()} \nProduz: ${listaDistritos[i].getRecursos()}\n`)
}

// Testando os métodos da classe Tributo
console.log('===================== [TRIBUTOS] =====================')
// Forma 1: Implicito
console.log(`====== Informações de ${tributo1.getNome()} ====== \nSaúde: ${tributo1.getSaude()} \nDistrito: ${tributo1.getDistrito().getNome()} \nSegredo: ${tributo1.getSegredo()} \nHabilidades: ${tributo1.getHabilidades()}\n`)
console.log(`====== Informações de ${tributo2.getNome()} ====== \nSaúde: ${tributo2.getSaude()} \nDistrito: ${tributo2.getDistrito().getNome()} \nSegredo: ${tributo2.getSegredo()} \nHabilidades: ${tributo2.getHabilidades()}\n`)
console.log(`====== Informações de ${tributo3.getNome()} ====== \nSaúde: ${tributo3.getSaude()} \nDistrito: ${tributo3.getDistrito().getNome()} \nSegredo: ${tributo3.getSegredo()} \nHabilidades: ${tributo3.getHabilidades()}\n`)
// Forma 2: Escalável
let listaTributos = [tributo1, tributo2, tributo3]
for (let i=0; i < listaTributos.length; i++) {
    console.log(`====== Informações de ${listaTributos[i].getNome()} ====== \nSaúde: ${listaTributos[i].getSaude()} \nDistrito: ${listaTributos[i].getDistrito().getNome()} \nSegredo: ${listaTributos[i].getSegredo()} \nHabilidades: ${listaTributos[i].getHabilidades()}\n`)
}

// Testando os métodos da classe Organizador
console.log('===================== [ORGANIZADOR] =====================')
console.log(`====== Informações de ${organizador1.getNome()} ====== \nDistritos:`)

// TRÊS FORMAS DE PEGAR O NOME DE CADA DISTRITO DE DENTRO DO ARRAY DISTRITOS
// Forma 1: Criar um loop aqui dentro mesmo para pegar o nome de todos os distritos
let distritosNomes = [];
for (let i=0; i < organizador1.getDistritos().length; i++) {
    distritosNomes.push(organizador1.getDistritos()[i].getNome())
}
console.log(distritosNomes.join(", "));

// Forma 2: Criar um método getDistritosNomes() na classe Organizador que tenha tudo que a alternativa 1 propõe.
console.log(organizador1.getDistritosNomes())

// Forma 3: Modificar o método getDistritos() da classe Organizador de forma que caso receba um argumento, como: getDistritos('nomes'), 
// listará os nomes desses objetos ao invés dos objetos em si; tendo tudo que a alternativa 1 propõe em um só método.
console.log(organizador1.getDistritos('nomes'), '\n')

organizador1.criarDesastre();
organizador1.liberarAnimais();
