'use strict';

function TreeNode(value) {
	this.value = value;
	this.children = [];
}

TreeNode.prototype.isChild(node) {
	return this.children.indexOf(node) > -1;
}

TreeNode.prototype.addChild(treeNode) {
	if (this.isChild(treeNode)) return;
	this.children.push(treeNode);
}

TreeNode.prototype.removeChild(treeNode) {
	if (!this.isChild(treeNode)) return;
	var index = this.children.indexOf(treeNode);
	this.children.splice(index, 1);
}