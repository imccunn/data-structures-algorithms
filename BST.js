'use strict';

function BST() {
	this.root = null;
}

BST.prototype.each = function(func, node) {
	node = (node === undefined) ? this.node : node;
	if (!node) return;

	this.each(node.left);
	func(node.value);
	this.each(node.right);
}

BST.prototype.contains = function(value, node) {
	node = (node === undefined) ? this.root : node;

	if (!node) return false;
	if (node.value === value) return true;

	if (value < node.value) return this.contains(value, node.left);
	return this.contains(value, node.right);
};

// write a function that takes a binary tree node. Return true if its corresponding
// 	sub-tree is a BST. Otherwise, return false.
BST.prototype.childIsBST = function(btn) {

};

// Given a BST tree and a value x. Write a function closest(tree, x) that returns 
// 		the value in the tree that's closest to the value x.
BST.prototype.closest = function(tree, x) {

};

