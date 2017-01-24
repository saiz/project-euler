function d(index,last,n){
	var str = String(last);
	if(index + str.length > n){
		return true;
	}
	index += str.length;
	return false;
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		index = 1,
		product = 1;
	while(i <= n){
		if(d(index,i,n)){
			console.log(d(index,i,n));
		}
		i+=1;
		console.log(i,index);
	}
	return;
}

console.log(main(process.argv[2]));