// Import das classes
import { Distrito } from "./distrito";
import { Habilidade } from "./habilidade";
import { Tributo } from "./tributo";
import { Organizador } from "./organizador";

// Inicialização de instancias de classe Distrito
const distrito1 = new Distrito('1', ['Ferro', 'Ouro'], 30);
const distrito2 = new Distrito('2', ['Mel'], 45);
const distrito3 = new Distrito('3', ['Grãos'], 50);

// Inicialização de instancias de classe Habilidade
const agilidade = new Habilidade("Agilidade")
const atirador_de_facas = new Habilidade("Atirador de Facas")
const forca = new Habilidade("Forca")
const arco_e_flecha = new Habilidade("Arco e Flecha")
const manipulacao = new Habilidade("Manipulação")
const furtividade = new Habilidade("Furtividade")

// Inicialização de instancias de classe Tributo
const jose = new Tributo('José', 98, distrito1, 'Escondeu irmão no dia da Seleção', [agilidade, atirador_de_facas], 10, 40);
const paola = new Tributo('Paola', 75, distrito2, 'Roubou a padaria do José', [forca, arco_e_flecha], 2, 24);
const arthur = new Tributo('Arthur', 70, distrito3, 'Espião', [manipulacao, furtividade], 4, 32)

// Inicialização de instancia de classe Organizador
const organizador1 = new Organizador('Alexander', [distrito1, distrito2, distrito3])


// Testando os métodos da classe Distrito
console.log('===================== [DISTRITOS] =====================')
let listaDistritos = [distrito1, distrito2, distrito3]
for (let distrito of listaDistritos) {
    console.log(`
    ====== Informações do Distrito ${distrito.getNome()} ======
    População: ${distrito.getPopulacao()}
    Produz: ${distrito.getRecursos()}
    `)
}

// Testando os métodos da classe Tributo
console.log('===================== [TRIBUTOS] =====================')
let listaTributos = [jose, paola, arthur]
for (let tributo of listaTributos) {
    console.log(`
    ====== Informações de ${tributo.getNome()} ======
    Saúde: ${tributo.getSaude()}
    Distrito: ${tributo.getDistrito().getNome()}
    Segredo: ${tributo.getSegredo()}
    Habilidades: ${tributo.exibirHabilidades()}
    Armadura: ${tributo.getArmadura()}
    Resistência: ${tributo.getResistencia()}
    `)
}

jose.sofrerDano(150)

// Testando os métodos da classe Organizador
console.log('===================== [ORGANIZADOR] =====================')
console.log(`
    ====== Informações de ${organizador1.getNome()} ======
    Rege os Distritos: ${organizador1.exibirDistritos()}
`)

organizador1.criarDesastre();
organizador1.liberarAnimais();
