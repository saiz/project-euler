function p(n){
	return n*(3*n -1)/2;
}
function pentagonal_array(){
	var array = [],
		i = 1;
	while(array.length < 2){
		array.push(p(i));
		i+=1;
	}
	return array;
}
function main() {
	'use strict';
	var array = pentagonal_array()
	return i;
}

console.log(main(process.argv[2]));