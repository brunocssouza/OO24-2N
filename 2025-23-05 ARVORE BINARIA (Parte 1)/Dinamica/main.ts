import { ArvoreGenealogica } from "./ArvoreGenealogica";
import { Node } from "./Node";
import { Pessoa } from "./Pessoa";

const bruno:Pessoa = new Pessoa("Bruno", "Cesar", "09/11/2001", "M")

const nodeBruno:Node<Pessoa> = new Node<Pessoa>();
nodeBruno.setValue(bruno)

const arvore:ArvoreGenealogica = new ArvoreGenealogica(nodeBruno);

const mae:Pessoa = new Pessoa("MAE", "Cesar", "09/11/2001", "M")
const nodeMae:Node<Pessoa> = new Node<Pessoa>();
nodeMae.setValue(mae)
arvore.adicionarFilho(nodeBruno, nodeMae)

console.log(arvore.getChildren())



const pai:Pessoa = new Pessoa("PAI", "Cesar", "09/11/2001", "M")


