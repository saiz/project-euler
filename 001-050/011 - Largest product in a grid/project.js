/*jslint white:true, for:true */
var fs = require('fs');
function generate_matrix(matrix){
	'use strict';
	var array = fs.readFileSync('./input.txt').toString().split("\r\n"),
	i;
	for(i=0;i<array.length;i+=1){
	    matrix.push(array[i].split(/\ /g));
	}

}
function max_value_direction(matrix, length, x,y){
	'use strict';
	var i, right = 1, down = 1, downright = 1, downleft = 1;
	for(i=0;i<length;i+=1){
		if(x+i >= matrix[y].length){
			break;
		}
		right *= parseInt(matrix[y][x+i],10);
	}
	for(i=0;i<length;i+=1){
		if(y+i >= matrix.length){
			break;
		}
		down *= parseInt(matrix[y+i][x],10);
	}
	for(i=0;i<length;i+=1){
		if((y+i >= matrix.length) || (x+i >= matrix[y].length) ){
			break;
		}
		downright *= parseInt(matrix[y+i][x+i],10);
	}
	for(i=0;i<length;i+=1){
		if((y+i >= matrix.length) || (x-i < 0) ){
			break;
		}
		downleft *= parseInt(matrix[y+i][x-i],10);
	}
	return Math.max(right,down,downright,downleft);
}

function main() {
	'use strict';
	var matrix = [];
	generate_matrix(matrix);
	var x=0,y=0, length = 4, max = 0, temp;

	while(y<matrix.length){
		x=0;
		while(x<matrix[y].length){
			temp = max_value_direction(matrix, length, x,y);
			if(max < temp){
				max = temp;
			}
			x+=1;
		}
		y+=1;
	}
	console.log(max);
}
main();
