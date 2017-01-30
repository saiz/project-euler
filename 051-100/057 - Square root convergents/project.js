//1 + 1/2 = 3/2 = 1.5
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/( 1 + sqrt_two(n-1) );
}
function fraction(a,b,c,n){
	if( n === 0){
		return [(a*c + b ),c];
	}
	return fraction(1, (a*c + b ),2,n-1);

	// a + b/c

}
	'use strict';
function main(n) {
	n = parseInt(n,10);
	var i =fraction(1,1,2,2);
	return i;
}

console.log(main(process.argv[2]));