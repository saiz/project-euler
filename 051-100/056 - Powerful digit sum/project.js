var BigNumber = require('bignumber.js');
function add(x, y) {
    return x + y;
}
function main() {
	'use strict';
	var a,b,i,j,max =100, sum;
	for(i=1;i<=max;i+=1){
		for(j=1;j<=max;j+=1){
			a = new BigNumber(i);
			b = new BigNumber(j);
			sum = a.toPower(b).toString(10).split("");
			console.log(sum);

		}
	}
	return;
}

console.log(main(process.argv[2]));