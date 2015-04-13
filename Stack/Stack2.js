'use strict';

function Stack () {
  var items = [];
  this.push = items.push.bind(items);
  this.pop = items.pop.bind(items);
  this.peek = function() {
    return items[items.length-1];
  };
}

module.exports = Stack;
