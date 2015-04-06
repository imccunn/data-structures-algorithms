'use strict';

function Stack() {
  this.items = [];
}

Stack.prototype = {
  constructor: Stack,

  push: function(data) {
    this.items.push(data);
  },

  pop: function() {
    this.items.pop();
  },

  peek: function() {
    return this.items[this.items.length-1];
  },

  isEmpty: function() {
    return this.items.length === 0;
  },

  this.size: function() {
    return this.items.length;
  },

  clear: function() {
    this.items = [];
  },

  print: function() {
    console.log(this.items.toString());
  }
};

module.exports = Stack;
