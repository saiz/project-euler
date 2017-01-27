var BigNumber = require('bignumber.js');
function add(x, y) {
    return x + y;
}
function main() {
	'use strict';
	var a,b,i,j,k,max =100, array, max =0, maxval
	for(i=1;i<=max;i+=1){
		for(j=1;j<=max;j+=1){
			a = new BigNumber(i);
			b = new BigNumber(j);
			array = a.toPower(b).toString(10).split("");
			k=0;
			while(k<array.length){
				array[k]=parseInt(array[k],10);
				k+=1;
			}
			console.log(array.reduce(add));

		}
	}
	return;
}

console.log(main(process.argv[2]));