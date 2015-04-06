'use strict';

var Stack = require('./Stack/Stack');

function StackQueue() {
  this.inStack = new Stack();
  this.outStack = new Stack();
}

StackQueue.prototype = {
  constructor: Queue,

  enqueue: function(data) {
    this.inStack.push(data);
  },

  dequeue: function() {
    if (this.outStack.isEmpty()) {
      while (!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  },

  front: function() {
    if (this.outStack.isEmpty()) {
      while (!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.peek();
  }
};

module.exports = StackQueue;
