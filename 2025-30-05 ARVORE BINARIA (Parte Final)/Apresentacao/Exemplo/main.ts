import { BinarySearchTree } from "./BinarySearchTree";
import { Contato } from "./Contato";

function comparePorNome(a: Contato, b: Contato): number {
  return a.nome.localeCompare(b.nome);
}

// Instancia a árvore de contatos
const agenda = new BinarySearchTree<Contato>(comparePorNome);

// Inserir 8 contatos
agenda.insert({ nome: "Gabriel", telefone: "9999-9999" });
agenda.insert({ nome: "Ana", telefone: "1111-1111" });
agenda.insert({ nome: "Carlos", telefone: "2222-2222" });
agenda.insert({ nome: "Fernanda", telefone: "3333-3333" });
agenda.insert({ nome: "Eduarda", telefone: "4444-4444" });
agenda.insert({ nome: "Beatriz", telefone: "5555-5555" });
agenda.insert({ nome: "Heitor", telefone: "6666-6666" });
agenda.insert({ nome: "Daniel", telefone: "7777-7777" });

// Exibir contatos em ordem alfabética (in-order)
console.log("📒 Contatos (ordem alfabética):");
agenda.inOrder().forEach(c =>
  console.log(`${c.nome}: ${c.telefone}`)
);

// Buscar um contato
const nomeBuscado = "Carlos";
const encontrado = agenda.search({ nome: nomeBuscado, telefone: "" });
console.log(`\n🔍 Buscar '${nomeBuscado}': ${encontrado ? "Encontrado" : "Não encontrado"}`);

// Remover um contato
const nomeRemover = "Beatriz";
agenda.delete({ nome: nomeRemover, telefone: "" });
console.log(`\n❌ '${nomeRemover}' removido.`);

// Exibir novamente após remoção
console.log("\n📒 Contatos após remoção:");
agenda.inOrder().forEach(c =>
  console.log(`${c.nome}: ${c.telefone}`)
);
