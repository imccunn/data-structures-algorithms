
class Stack {
 constructor() {
   this._data = [];
 }

 push(value) {
   this._data.push(value);
 }

 pop() {
   return this._data.pop();
 }

 getLength() {
   return this._data.length;
 }
}

function valOrNull(value) {
  return value ? value.value : null
}

const findLeafWeights = (binaryTree, integer) => {
  console.log(`searching for branch weight of ${integer}.`);
  console.log(JSON.stringify(binaryTree, null, 2));
  let values = [];
  let branchSum = 0;

  function traverse (binaryTree, branchSum) {
    let sumSoFar = branchSum;
    // console.log(`node: ${binaryTree.value} ${valOrNull(binaryTree.left)} ${valOrNull(binaryTree.right)}`)
    if (binaryTree.value) {
      sumSoFar += binaryTree.value;
      // console.log('sum: ', sumSoFar);
    }

    if (binaryTree.left) {
      // console.log('traversing left');
      traverse(binaryTree.left, sumSoFar);
    }

    if (binaryTree.right) {
      // console.log('traversing right');
      traverse(binaryTree.right, sumSoFar);
    }

    if (!binaryTree.left && !binaryTree.right) {
      // console.log('----- leaf')
      values.push(sumSoFar)
      // console.log('values: ', values);
      return;
    }
  }

  traverse(binaryTree, branchSum);
  // console.log('values ', values);
  return !!values.find((i) => {
    return i === integer;
  });
};

var binTree1 = require('./BinaryTree');


console.log(findLeafWeights(binTree1, 10));

module.exports = findLeafWeights;
