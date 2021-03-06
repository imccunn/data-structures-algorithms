
const Node = require('./Node');

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype = {
  constructor: LinkedList,

  append: function(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // Loop until last item is found
      while (current.next) {
        current = current.next;
      }

      // get last item and assign next to node to make link
      current.next = node;
    }

  },
  insert: function(position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        node.next = current;
        this.head = node;
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
  removeAt: function(position) {
    // Check for out-of-bounds values
    if (position > -1 && position < this.length) {
      let current = this.head,
      let previous;
      let index = 0;

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

  remove: function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  },

  indexOf: function(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  },

  isEmpty: function() {
    return this.length === 0;
  },

  size: function() {
    return this.length;
  },

  toString: function() {
    let current = this.head;
    let string = '';
    while (current) {
      string += current.element + ' -> ';
      current = current.next;
    }
    return string;
  }
};
