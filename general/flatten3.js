'use strict';

var flatten = function(arr, collector) {
  collector = collector || [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
     flatten(arr[i], collector);
    } else {
     collector.push(arr[i]);
    } 
  }
  return collector;
};
