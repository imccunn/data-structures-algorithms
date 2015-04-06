'use strict';

function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function(data) {
  items.push(data);
};

Queue.prototype.dequeue = function() {
  this.items.shift();
};

Queue.prototype.front = function() {
  return this.items[0];
};

Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

Queue.prototype.clear = function() {
  this.items = [];
};

Queue.prototype.size = function() {
  return this.items.length;
};

Queue.prototype.print = function() {
  return console.log(items.toString());
};
