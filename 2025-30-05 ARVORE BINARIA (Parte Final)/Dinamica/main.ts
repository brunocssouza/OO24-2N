import { Pessoa } from "./Pessoa";
import { Conjuge } from "./Conjuge";
import { Node } from "./Node";
import { ArvoreGenealogica } from "./ArvoreGenealogica";

// Pessoas... eu vo chora...
const gustavo = new Pessoa("Gustavo", [null, null])
const larissa = new Conjuge("Larissa", [null, null]);
const bruno = new Pessoa("Bruno", [gustavo, larissa]);

const nelci = new Pessoa("Nelci", [null, null])
const simone = new Pessoa("Simone", [null, null])
const adriana = new Pessoa("Adriana", [nelci, simone]);

const ricardo = new Pessoa("Ricardo", [null, null]);

const negrinha = new Conjuge("Negrinha", [simone, larissa])
const vo = new Conjuge("Vô", [simone, larissa])

const armando = new Conjuge("Armando", [null, null]);
const marisa = new Conjuge("Marisa", [null, null]);

// Nodes de cada um...
const nodeBruno = new Node<Pessoa>(bruno);
const nodeAdriana = new Node<Pessoa>(adriana);
const nodeRicardo = new Node<Pessoa>(ricardo);
const nodeNegrinha = new Node<Pessoa>(negrinha);
const nodeVo = new Node<Pessoa>(vo);
const nodeArmando = new Node<Pessoa>(armando);

// Montando a árvore
nodeBruno.left = nodeAdriana
nodeBruno.right = nodeRicardo

nodeAdriana.left = nodeNegrinha
nodeAdriana.right = nodeVo

nodeRicardo.left = nodeArmando;

// Instanciando a árvore genealógica
const arvore = new ArvoreGenealogica(nodeBruno);

// Testes
console.table(arvore.encontrarPessoa("Adriana"));
arvore.adicionarFilho(ricardo, marisa)
bruno.listarRelacoes();
