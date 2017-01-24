function p(n){
	return n*(3*n -1)/2;
}
function pentagonal_array(){
	var array = [],
		i = 1;
	while(array.length < 3){
		array.push(p(i));
		i+=1;
	}
	return array;
}
function main() {
	'use strict';
	var array = pentagonal_array();
	console.log(array);
	return;
}

console.log(main(process.argv[2]));