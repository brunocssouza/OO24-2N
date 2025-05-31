import { BinarySearchTree } from "./BinarySearchTree";

const tree = new BinarySearchTree<number>((a, b) => a - b);
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log('In-order:', tree.inOrder());     // [3, 5, 7, 10, 12, 15, 18]
console.log('Pre-order:', tree.preOrder());   // [10, 5, 3, 7, 15, 12, 18]
console.log('Post-order:', tree.postOrder()); // [3, 7, 5, 12, 18, 15, 10]

console.log('Node 7 existe?:', tree.search(7)); // true
console.log('Node 9 existe?:', tree.search(9)); // false

tree.delete(5);
console.log('Pós-deleção do node 5 (in-order):', tree.inOrder()); // [3, 7, 10, 12, 15, 18]
