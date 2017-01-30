var BigNumber = require('bignumber.js');
function fract(a,b,m,n){
	var i, k;
	if(m < n){
		i = a.plus(b);
		k = b.plus(i);
		return fract(i,k,m+1,n);
	}
	return [a,b];
}
function fraction(n){
	var a = new BigNumber(3),
		b = new BigNumber(2);
	return fract(a,b,1,n);
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i = 1,
		count = 0,
		arr;
	while(i <=n){
		arr = fraction(i);
		console.log(arr[0].c.join(""));
		console.log('---');
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));