
function IsWholeNumberPower(x, y){
    var  power = Math.log(x)/Math.log(y);
    return Math.floor(power) === power;
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 2,
		index = 2,
		product = 1,
		power = 0;


	while(i <= n){
		if(index >= Math.pow(10,power) - String(i).length){
			console.log(i,index);
			power+=1;
			// if(d(index,i,n)){
		}
		// 	if(IsWholeNumberPower(i,10)){
		// 		console.log(d(index,i,n));
		// 	}
		// }
		index += String(i).length;
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));