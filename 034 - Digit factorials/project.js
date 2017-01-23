function fact(array,n) {
	'use strict';
	if(n < array.length){
		return array[n];
	}
	array.push( array[array.length - 1] * array.length);
	return fact(array,n);
}
function main() {
	'use strict';
	var array = [];
	fact(array, 7);
	return array;
}

console.log(main(process.argv[2]));