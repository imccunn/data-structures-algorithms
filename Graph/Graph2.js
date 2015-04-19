'use strict';

function Vertex() {
  this.value;
  this.neighbors;
}

function Graph() {
  this.vertices = [];
}

Graph.prototype.neighbors = function(nodeIndex) {
  return (this.vertices[nodeIndex] && 
    this.vertices[nodeIndex].neighbors) || [];
};

Graph.prototype.isAdjacent = function(v, inV) {
  var vertexStructure = this.vertices[inV];
  return vertexStructure && vertexStructure.neighbors &&
    (vertexStructure.neighbors.indexOf(v) > -1);
};

Graph.prototype.getValue = function(vertexIndex) {
  return this.vertices[vertexIndex] &&
    this.vertices[vertexIndex].value;
};

Graph.prototype.setValue = function(vIndex, value) {
  if (!this.vertices[vIndex]) this.structure[vIndex] = {};
  this.structure[vIndex].value = value;
};

