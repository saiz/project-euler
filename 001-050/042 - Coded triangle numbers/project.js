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
function main() {
	'use strict';
	var array = names_array(),
		i = -1;
		while(i<array.length){
			i+=1;
			console.log(array[i]);
		}
	return;
}

console.log(main(process.argv[2]));