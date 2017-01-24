
function IsWholeNumberPower(x, y){
    var  power = Math.log(x)/Math.log(y);
    return Math.floor(power) === power;
}
function d(index,last,n){
	var str = String(last);
	if(index[0] + str.length > n){
		return true;
	}
	index[0] = index[0] + str.length;
	return false;
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		index = [1],
		product = 1;

	while(i <= n){
		console.log(IsWholeNumberPower(i,10))
		if(d(index,i,n)){
			if(IsWholeNumberPower(i,10)){
				console.log(d(index,i,n));
			}
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));