function fib(array,n) {
	'use strict';
	if(n < array.length){
		return array[n];
	}
	if(array.length < 2){
		array.push(1);
	} else{
		array.push( array[array.length - 2] + array[array.length - 1]);
	}
	fib(array,n);
}
function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));