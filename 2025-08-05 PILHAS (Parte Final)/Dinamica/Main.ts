import { CartaEnergia } from "./CartaEnergia";
import { CartaItem } from "./CartaItem";
import { CartaPokemon } from "./CartaPokemon";
import { CartaTreinador } from "./CartaTreinador";
import { Pilha } from "./Pilha";
import { Baralho } from "./Baralho";
import { Tabuleiro } from "./Tabuleiro";

// Criando cartas variadas
const energia = new CartaEnergia("Fogo Intenso", "Energia", 50);
const item = new CartaItem("Poção Mágica", "Item", "Recupera 30 HP");
const pokemon = new CartaPokemon("Pikachu", "Elétrico", 55, 60);
const treinador = new CartaTreinador("Brock", "Treinador", "Aumenta defesa dos Pokémon de pedra");

// Criando uma pilha inicial com as cartas
const pilhaInicial = new Pilha([energia, item, pokemon, treinador]);

// Criando um baralho com essa pilha
const baralho = new Baralho(pilhaInicial);

// Criando o tabuleiro com o baralho
const tabuleiro = new Tabuleiro(baralho);

console.log("===== TOPO DO BARALHO ANTES DE EMBARALHAR =====");
baralho.visualizarTopo();

// Embaralhar cartas
baralho.embaralhar();

console.log("\n===== TOPO DO BARALHO DEPOIS DE EMBARALHAR =====");
baralho.visualizarTopo();

// Comprar uma carta
console.log("\n===== COMPRANDO UMA CARTA PARA A MÃO =====");
tabuleiro.adicionarCartaMao();

// Exibir cartas restantes no baralho
console.log("\n===== CARTAS RESTANTES NO BARALHO =====");
baralho.getCartas().getCartas().forEach(c => c.exibirCarta());

// Descartar uma carta manualmente (simulando)
console.log("\n===== DESCARTANDO UMA CARTA =====");
tabuleiro.descartarCarta(item);

// Exibir pilha de descarte
console.log("\n===== PILHA DE DESCARTE =====");
tabuleiro.exibirDescarte();
