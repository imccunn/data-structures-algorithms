'use strict';

function isArray(val) {
	return (typeof val === "object" &&
					val.constructor === Array &&
					val instanceof Array);
}

function flatten(arr) {
	if (arr.length === 1 && !isArray(arr[0])) {
		return arr;
	}

	var ret = [];
	console.log("arr", arr);
	
	for (var i = 0; i < arr.length; i++) {
		console.log("arri", arr[i]);
		if (isArray(arr[i])) {
			ret = ret.concat(flatten(arr[i]));
		} else {
			ret.push(arr[i]);
		}
	}
	console.log('ret: ', ret);
	return ret;
}

var ar1 = [0, 1, [0, 2, 3], [0, 1], 2, [3, [3, 4]], 1];

var args = Array.prototype.slice(process.argv, 2);

console.log(flatten(ar1));

