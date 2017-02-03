var BigNumber = require('bignumber.js');
function b(i){
	if(i ===1){
		return 0;
	} else if( (i-1)%3 !== 0){
		return 1;
	}
	return 2*((i-1)/3);
}
function A(n,arr){
	if(n===0){
		return new BigNumber(b(0));
	} else if(n===1){
		return b(1)*b(0) +1;
	} else if( arr[n] !== undefined){
		return new BigNumber(arr[n]);
	}
	var b = new BigNumber(b(n));
	arr[n] = b.times(A(n-1,arr)).plus(A(n-2,arr));
	return arr[n];
}
function main(j) {
	'use strict';
	j = parseInt(j,10) +1;
	var mem =[];
	console.log(A(j,mem));
	return;
}


console.log(main(process.argv[2]));