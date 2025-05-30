import { Node } from "./Tree";

const rootNode = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");

rootNode.addChildren(nodeB)
rootNode.addChildren(nodeC)

console.log(rootNode.getChildren())
console.log(nodeB.getChildren())