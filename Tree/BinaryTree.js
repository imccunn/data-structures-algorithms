class BinaryTree {
 constructor(value){
   this.value = value;
   this.left = null;
   this.right = null;
 }
}

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);
let eight = new BinaryTree(8);

one.left = two;
one.right = three;
two.left = four;
four.left = eight;
two.right = five;
three.left = six;
three.right = seven;

module.exports = one;