var BigNumber = require('bignumber.js');
function fract(a,b,m,n){
	var i, k;
	var i = new BigNumber(a).plus(b),
		k = new BigNumber(i).plus(b);
	if(m < n){
		return fract(j,k,m+1,n);
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
		console.log(arr[0].c.join(""),arr[1].c.join(""));
		if(arr[0].c.join("").length > arr[1].c.join("").length){
			count +=1;
		}
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));