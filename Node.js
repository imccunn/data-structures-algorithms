'use strict';

/**
 *      Node to be used as a node of a binary tree data strucutre
 * @param {Any} data  Data to be held at node
 * @param {Node} left  Node or subtree.
 * @param {Node} right Node or subtree.
 */
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = function() {
		return this.data;
	}
}

module.exports = Node;
