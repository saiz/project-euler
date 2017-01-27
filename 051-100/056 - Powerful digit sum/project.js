var BigNumber = require('big-number');
function main() {
	'use strict';
	var a,b,max =100;
	for(a=1;a<=max;a+=1){
		for(b=1;b<=max;b+=1){
			console.log(Math.pow(a,b));
		}
	}
	return;
}

console.log(main(process.argv[2]));