var BigNumber = require('bignumber.js');
function main(j) {
	'use strict';
	j = parseInt(j,10) +1;
	var a = [],
		c = [],
		// p = [],
		// q = [],
		i = 0;
	while(c.length <= j +1){
		a[3*i] =1;
		a[3*i+1] =2*i;
		a[3*i+2] =1;
		// if(i===0){
		// 	c[i] =a[0];
		// } else if(i===1){
		// 	c[i] = a[1]*a[2] + 1;
		// } else{
		// 	c[i] = a[i]*c[i-1] + c[i-2];
		// }
		i+=1;
	}
	console.log(c[j]);
	return;
}


console.log(main(process.argv[2]));