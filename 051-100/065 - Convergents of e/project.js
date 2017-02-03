var BigNumber = require('bignumber.js');
function a(i){
	if(i ===1){
		return 0;
	} else if((i-1)%3 === 0){
		return 2*((i-1)/3);
	}
	return 1;
}
function main(j) {
	'use strict';
	j = parseInt(j,10) +1;
	var a = [],
		c = [],
		// p = [],
		// q = [],
		i = 0;
	while(a.length <= j +1){
		a[i] = a(i);
		i+=1;
	}
	console.log(a);
	return;
}


console.log(main(process.argv[2]));