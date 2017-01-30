//1 + 1/2 = 3/2 = 1.5
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/( 1 + sqrt_two(n-1) );
}
function fract(a,b,m,n){
	console.log(a,b,m,n);
	if(m === 0 ){
		return [3,2];
	}
	if(m <= n){
		return fract()
	}
	return [a,b];
}
function fraction(n){
	return fract(n);
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =fraction(n);
	return i;
}

console.log(main(process.argv[2]));