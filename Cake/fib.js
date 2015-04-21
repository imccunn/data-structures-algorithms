// Recursive: O(2^n) --- BAD PROGRAMMER ---
function fib(n) {
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
}

/**
 *   Returns an array with indices from 0-n
 */
function range(n) {
  var range = [];
  for (var i = 1; i <= n; i++) range.push(i);
  return range;
}

// Iterative Solution: O(n) time, O(1) space ----- GOOD -----
function fib_iterative(n) {
  if (n < 0) throw new RangeError("Index cannot be negative.");
  else if (n < 2) return n;

  var prev = 0;
  var prev_prev = 1;
  var current;

  for (var i in range(n)) {
    current = prev + prev_prev;
    prev_prev = prev;
    prev = current;
  }
  return current;
}

// Recursive with memoization: O(log n) time --- BEST ---
function Fib() {
  this.memo = {};
  this.fib = function(n) {
    if (n < 0) throw new RangeError("Cannot compute negative numbers.");
    else if (n < 2) return n;
    if (n in this.memo) return this.memo[n];
    var newResult = this.fib(n-1) + this.fib(n-2);
    this.memo[n] = newResult;
    return newResult;
  };
}

// ----- Sample Uses -----
// var fib1 = new Fib();
// console.log(fib1.fib(6));

// console.log(fib_iterative(8));
