'use strict';

function find_largest(root) {
  var current = root;
  while (current) {
    if (!current.right) {
      return current.data;
    }
    current = current.right;
  }
}

module.exports = find_largest;
