'use strict';

function Vertex(data) {
  this.value = data || null;
  this.neighbors = [];
}

Vertex.prototype.degree = function() {
  return this.neighbors.length;
};

module.exports = Vertex;