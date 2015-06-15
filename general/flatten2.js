var recurse = function(input, collector) {
  if (Array.isArray(input)) {
    for (var i = 0; i < input.length; i++) {
      recurse(input[i], collector);
    }
  } else {
    collector.push(input);
  }
};

var flatten = function(input) {
  var final = [];
  recurse(input, final);
  return final;
};


var ar1 = [1, 2, [3, 4, 5], 3, 4, [3, 4, [7, 6]], 1];

console.log(flatten(ar1));
