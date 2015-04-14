'use strict';

function Dictionary() {
  var items = {};

  this.set = function(key, value) {
    items[key] = value;
  };

  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function(key) {
    return (key in items);
  };

  this.get = function(key) {
    return (key in items) ? items[key] : undefined;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.keys = function() {
    return Object.keys(items);
  };

  this.values = function() {
    var values = [];
    for (var key in items) {
      if (this.has(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };

  this.each = function(callback) {
    for (var key in items) {
      if (this.has(key)) {
        callback(key, items[key]);
      }
    }
  };

  this.getItems = function() {
    return items;
  };
}

module.exports = Dictionary;
