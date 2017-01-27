var BigNumber = require('big-number');
function main() {
	'use strict';
	var a,b,i,j,max =100;
	for(i=1;i<=max;i+=1){
		for(j=1;b<=max;b+=1){
			console.log(Math.pow(a,b));
		}
	}
	return;
}

console.log(main(process.argv[2]));