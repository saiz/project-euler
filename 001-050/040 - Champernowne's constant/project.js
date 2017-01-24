
function IsWholeNumberPower(x, y){
    var  power = Math.log(x)/Math.log(y);
    return Math.floor(power) === power;
}
function d(index,last,n){
	var str = String(last);
	index[0] = index[0] + str.length;
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		index = 1,
		product = 1,
		power = 0;

	while(i <= n){
		if(index + String(i).length > Math.pow(10,power)){
			console.log(index);
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