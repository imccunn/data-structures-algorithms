'use strict';

var Queue = require('../Queue/Queue');

function Graph() {
  var vertices = [];
  var adjList = {};

  this.addVertex = function(v) {
    vertices.push(v);
    adjList[v] = [];
  };

  this.addEdge = function(v, w) {
    adjList[v].push(w);
    adjList[w].push(v);
  };

  this.bfs = function(v, callback) {
    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList[u];
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        queue.enqueue(w);
      }
      if (callback) callback(u);
    }
  };
}
