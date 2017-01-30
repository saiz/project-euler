//1 + 1/2 = 3/2 = 1.5
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/( 1 + sqrt_two(n-1) );
}
function fraction(a,b,n){
	if( n === 0){
		return [(a + b ) -1,a];
	}
	return fraction((a + b ), a,n-1);
	// (a + b)/a

}
	'use strict';
function main(n) {
	n = parseInt(n,10);
	var i =fraction(3,2,0);
	return i;
}

console.log(main(process.argv[2]));