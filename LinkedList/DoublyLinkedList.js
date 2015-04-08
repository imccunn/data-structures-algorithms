'use strict';

function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
};

function DoublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;

}

DoublyLinkedList.prototype = {
  constructor: DoublyLinkedList,
  insert: function (position, element) {

    if (position >= 0 && position <= length) {
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      if (position === 0) {
        if (!head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
};
