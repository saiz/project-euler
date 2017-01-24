var BigNumber = require('big-number');
function fibonacci(array) {
	'use strict';
	var a,b;
	if (array.length < 2) {
		array.push(new BigNumber(1));
	} else{
		a = new BigNumber(array[array.length - 1]);
		b = new BigNumber(array[array.length - 2]);
		array.push(a.plus(b));
	}
}
function main(n) {
	'use strict';
	var fib_array =[], length = 0;
	while(length < n){
		fibonacci(fib_array);
		length = fib_array[fib_array.length-1].number.length;
	}
	return fib_array.length;
}

console.log(main(process.argv[2]));