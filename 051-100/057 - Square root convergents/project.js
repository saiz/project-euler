//1 + 1/2 = 3/2 = 1.5
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/( 1 + sqrt_two(n-1) );
}
function fract(a,b,m,n){
	console.log(a,b,m,n);
	if(m <= n){
		return fract(b+a,a,m+1,n);
	}
	return [b +a,a];
}
function fraction(n){
	return fract(3,2,1,n);
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =fraction(n);
	return i;
}

console.log(main(process.argv[2]));