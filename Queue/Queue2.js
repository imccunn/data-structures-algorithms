'use strict';

function Queue() {
  var items = [];
  var front = 0;

  this.queue = items.push.bind(items);
  this.dequeue = function() {
    var next = items[front];
    items[front] = null;
    front++;
    return next;
  };

  this.hasNext = function() {
    return !!(items.length);
  };
}

module.exports = Queue;
