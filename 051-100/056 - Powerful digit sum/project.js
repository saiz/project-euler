var BigNumber = require('bignumber.js');
function main() {
	'use strict';
	var a,b,i,j,max =100;
	for(i=1;i<=max;i+=1){
		for(j=1;j<=max;j+=1){
			a = new BigNumber(i);
			b = new BigNumber(j);
			console.log(a.toPower(b).number);
		}
	}
	return;
}

console.log(main(process.argv[2]));