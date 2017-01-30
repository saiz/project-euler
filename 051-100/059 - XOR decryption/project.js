var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}
function next(array, start, end){
	if(array[2] + 1 > end){
		array[2] = start;
		array[1] +=1;
	} else{
		array[2]+=1;
	}
	if(array[1] + 1 > end){
		array[2] = start;
		array[1] +=1;
	} else{
		array[2]+=1;
	}
	if( array[0] > end){
		return false;
	}
	return true;
}

function main(n) {
	'use strict';
	var arr = cipher_array(),
		a = n.charCodeAt(0),
		b = n.charCodeAt(1),
		c = n.charCodeAt(2),
		d = [a,b,c],
		i=0;
	console.log('a'.charCodeAt(0),'z'.charCodeAt(0));
	while(i<arr.length){

		arr[i] = String.fromCharCode(d[i%3]^arr[i]);
		i+=1;
	}
	// /console.log(min, max);
	return arr.join("");
}

console.log(main(process.argv[2]));