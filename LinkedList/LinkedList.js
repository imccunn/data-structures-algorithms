'use strict';

var Node = require('./Node');

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype = {
  constructor: LinkedList,

  append: function(element) {
    var node = new Node(element),
        current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = head;

      // Loop until last item is found
      while (current.next) {
        current = current.next;
      }

      // get last item and assign next to node to make link
      current.next = node;
    }

  },
  insert: function(position, element) {
    if (position >= && position <= this.length) {
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  },
  removeAt: function() {
    // Check for out-of-bounds values
    if (position > -1 && position < this.length) {
      var current = head,
          previous,
          index = 0;

      // Remove first item
      if (position == 0) {
        head = current.next;
      } else {
        while (index++ < this.length) {
          previous = current;
          current = current.next;
        }

        // Link previous with current's next
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  },
  remove: function() {},
  indexOf: function() {},
  isEmpty: function() {},
  size: function() {},
  toString: function() {},
  print: function() {}

};
