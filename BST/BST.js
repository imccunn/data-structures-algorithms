'use strict';

var Node = require('./Node');

function BST() {
  this.root = new Node();
}

BST.prototype.insertNode = function(root, newNode) {
  if (newNode.data < root.data) {
    if (root.left === null) root.left = newNode;
    else this.insertNode(root.left, newNode);
  } else {
    if (root.right === null) root.right = newNode;
    else this.insertNode(root.right, newNode);
  }
};

BST.prototype.each = function(node, callback) {
  node = (node === undefined) ? this.root : node;
  if (!node) return;

  this.each(node.left);
  callback(node.value);
  this.each(node.right);
};

BST.prototype.contains = function(value, node) {
  node = (node === undefined) ? this.root : node;

  if (!node) return false;
  if (node.value === value) return true;

  if (value < node.value) return this.contains(value, node.left);
  return this.contains(value, node.right);
};

BST.prototype.min = function(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.data;
  }
  return null;
};

BST.prototype.max = function(node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
  return null;
};

BST.prototype.removeNode = function(node, element) {
  if (node === null) return null;

  if (element < node.data) {
    node.left = this.removeNode(node.left, element);
    return node;
  } else if (element > node.data) {
    node.right = this.removeNode(node.right, element);
    return node;
  } else {
    // handle 3 conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children 

    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    var aux = this.min(node.right);
    node.data = aux;
    node.right = this.removeNode(node.right, aux);
    return node;
  }
};

// write a function that takes a binary tree node. Return true if its corresponding
//  sub-tree is a BST. Otherwise, return false.
BST.prototype.isBST = function(root) {
  if (root === null) return true;

  if (isSubTreeLesser(root.left, root.data)
    && isSubTreeGreater(root.right, root.data)
    && isBST(root.left)
    && isBST(root.right)) {

    return true;
  } else {
    return false;
  }

}; // **********  O(n^2) **********


BST.prototype.isSubTreeLesser = function(root, val) {
  if (root === null) return true;

  if (root.data < val
    && this.isSubTreeLesser(root.left, val)
    && this.isSubTreeLesser(root.right, val)) {

    return true;
  } else {
    return false;
  }
};

BST.prototype.isSubTreeGreater = function(root, val) {
  if (root === null) return true;

  if (root.data > val
    && this.isSubTreeGreater(root.left, val)
    && this.isSubTreeGreater(root.right, val)) {

    return true;
  } else {
    return false;
  }
};

// Given a BST tree and a value x. Write a function closest(tree, x) that returns
//    the value in the tree that's closest to the value x.

function diff(v1, v2) {
  return Math.abs(v1 - v2);
}

BST.prototype.closest = function(node, x) {
  
  node = (node === undefined) ? this.root : node;
  if (!node) return;
  if (node.value === x) return node.value;
  if (x < node.value) {
    if (x > node.left.value) {
      return ((diff(node.value, x) < diff(node.left.value, x)) ? node.value : node.left.value);
    }
    return this.closest(node.left, x);
  } else if (x > node.value) {
    if (x < node.right.value) {
      return ((diff(node.value, x) < diff(node.right.value, x)) ? node.value : node.right.value);
    }
    return this.closest(node.right, x);
  }
};

BST.prototype.depth = function(node) {
  if (node) {
    if (!node.left && !node.right) {
      return 1;
    } else {
      var temp_depth = Math.max(this.depth(node.left), this.depth(node.right));
      return temp_depth;
    }

  } else {
    return 0;
  }

};

module.exports = BST;
