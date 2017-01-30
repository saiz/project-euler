//1 + 1/2 = 3/2 = 1.5
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/(sqrt_two(n-1) );
}

function main() {
	'use strict';
	var i =sqrt_two(3);
	return i;
}

console.log(main(process.argv[2]));