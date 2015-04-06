'use strict';

var find_largest = require('./find_largest');

function second_greatest(root) {

  var current = root;

  while (current) {

    if (current.left && !current.right) {
      return find_largest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.data;
    }

    current = current.right;
  }
}

module.exports = second_greatest;
