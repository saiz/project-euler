function fact(array,n) {
	'use strict';
	if(n < array.length){
		return array[n -1];
	}
	if(array.length < 1){
		array.push(1);
	} else{
		array.push( array[array.length - 1] * (array.length + 1));
	}
	return fact(array,n);
}
function main() {
	'use strict';
	var array = [];
	console.log(fact(array, 7));
	return array;
}

console.log(main(process.argv[2]));