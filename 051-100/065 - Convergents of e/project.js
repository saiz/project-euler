function fract(a,b,m,n){
	var i, k;
	var i = new BigNumber(a).plus(b),
		k = new BigNumber(i).plus(b);
	if(m < n){
		return fract(k,i,m+1,n);
	}
	return [a,b];
}
function fraction(n){
	var a = 3,
		b = 2;
	return fract(a,b,1,n);
}

function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));