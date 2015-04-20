'use strict';

var Queue = require('../Queue/Queue');
var Dictionary = require('../Dictionary/Dictionary');

function Graph() {
  var vertices = [];
  var adjList = new Dictionary();

  this.addVertex = function(v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function(v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
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
