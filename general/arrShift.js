// Input:  [0, 1, 0, 0, 1, 1, 0, 1, 1]
// Output: [0, 0, 0, 0, 1, 1, 1, 1, 1]


function shift(arr) {
  var cnt = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) cnt++;
  }

  for (var i = 0; i < arr.length; i++) {
    if (i <= cnt) arr[i] = 0;
    else arr[i] = 1;
  }
}

function shiftOneLoop(arr) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = 1;
      index++;
      arr[index] = 0;
    }
  }
}

