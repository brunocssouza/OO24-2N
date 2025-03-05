// Crie uma classe Tabuleiro, com atributo area contendo as dimensões de uma matriz.
// Faça com que uma classe Jogador possa se mover entre as casas da matriz.
// O jogador pode obter itens ao passar pelas casas e armazenalo em um inventário.

import { Jogador } from "./jogador";
import { Tabuleiro } from "./tabuleiro";
import { Inventario } from "./inventario";


const inventario1 = new Inventario()
inventario1.addItem("Espada de Madeira")

const jogador1 = new Jogador("Bruno", inventario1);

const tabuleiro1 = new Tabuleiro(jogador1, [3,3]);
tabuleiro1.jogar();
