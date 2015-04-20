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

Graph.prototype.isPath = function(vertexIndex, vertex2Index) {
  var next = this.vertices[vertexIndex].neighbors;
  var seen = {};
  seen[vertexIndex] = true;
  var current;

  while (next.length) {
    current = next.shift();
    if (current === vertex2Index) return true;
    if (!seen[current]) next.concat(this.vertices[currnt].neighbors);
    seen[current] = true;        
  }
  return false;
};

Graph.prototype.isPathAcyclic = function(vertexIndex, vertex2Index) {
  var current = this.vertices[vertexIndex];
  if (!current || !current.neighbors) return false;
  if (current.neighbors.indexOf(vertex2Index) > -1) return true;
  for (var i = 0; i < current.neighbors.length; i++) {
    if(this.isPathAcyclic(current.neighbors[i], vertex2Index)) return true;
  }
  return false;
};

Graph.prototype.eachDepth = function(vertexIndex, vertex2Index, callback) {
  var next = this.vertices[vertexIndex].neighbors;
  var seen = {};
  var current;

  while (next.length) {
    current = next.pop();
    if (seen[current]) continue;
    callback(this.getValue(current));
    seen[current] = true;
    next.concat(this.vertices[current].neighbors);
  }
};

Graph.prototype.hasCycle = function(vertexIndex) {
  var next = [].concat(this.vertices[vertexIndex].neighbors);
  var seen = {};
  var current;

  while (next.length) {
    current = next.pop();
    if (seen[current]) return true;
    seen[current] = true;
    next.concat(this.structure[current].neighbors);
  }
  return false;
};
