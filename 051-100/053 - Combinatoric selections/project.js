function fact(n){
	if(n <2){
		return 1;
	}
	return n * fact(n-1);
}
function comb(n,r){
	return fact(n)/(fact(r)*fact(n - r));
}
function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));