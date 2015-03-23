'use strict';

module.exports = {
	map: [],
	initMap: function() { // fill
		for (var i = 0; i < this.w; i++) {
			this.map[i] = [];
			for ( var j = 0; j < this.h; j++) {
				this.map[i][j] = 0;
			}
		}
	},
	cartDist: function(x1, x2, y1, y2) {
			return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
		}
};