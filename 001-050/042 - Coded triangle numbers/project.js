var fs = require('fs');
function names_array(){
	'use strict';
	var arr = fs.readFileSync('./words.txt').toString().split(","),
	i;
	for(i=0;i<arr.length;i+=1){
	    arr[i] = arr[i].replace(/['"]+/g, '').toLowerCase();
	}
	return arr;

}

function t(n){
	return n/2*(n+1);
}
function charcode (str){
	return str.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) +1;
}
function stringscore(str){
	var i = 0,
		sum = 0;
	while(i <str.length){
		sum += charcode(str[i]);
		i+=1;
	}
	return sum;
}

function main() {
	'use strict';
	var array = names_array(),
		triangle = [1],
		i = 0;
		while(i<array.length){
			console.log(stringscore(array[i]));
			i+=1;
		}
	return;
}

console.log(main(process.argv[2]));