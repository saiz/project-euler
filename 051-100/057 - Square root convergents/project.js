//1 + 1/2 = 3/2 = 1.5
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/( 1 + sqrt_two(n-1) );
}

function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =sqrt_two(n);
	return i;
}
function fraction(a,b,c){
	// a + b/c

}

console.log(main(process.argv[2]));