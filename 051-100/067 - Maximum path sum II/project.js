/*jslint white:true, for:true */
var fs = require('fs');
function generate_matrix(){
	'use strict';
	var array = fs.readFileSync('./input.txt').toString().split("\r\n"),
	i, matrix = [];
	for(i=0;i<array.length;i+=1){
	    matrix.push(array[i].split(/\ /g).map(Number));
	}
	return matrix;
}
function main() {
	'use strict';
	var i,j, copy = [], matrix = generate_matrix(), current =0, left,right, max = 0;
	copy.push(matrix[0]);
	for(i=1;i<matrix.length;i+=1){
		if(copy[i] === undefined){
			copy.push([]);
		}
		for(j=0;j<matrix[i].length;j+=1){
			left =0;
			right =0;
			current = matrix[i][j];
			if(j-1 >=0){
				left =copy[i-1][j-1];
			}
			if(j < matrix[i-1].length){
				right =copy[i-1][j];
			}
			if(left>right){
				copy[i].push(left + current);
			} else{
				copy[i].push(right + current);
			}
			if(copy[i][j]>max){
				max =copy[i][j];
			}

		}
	}
	return max;
}

console.log(main(process.argv[2]));