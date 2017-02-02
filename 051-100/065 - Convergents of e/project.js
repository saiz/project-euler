function p_n(a,n){
	if(n === 0) {
		return a[n];
	}
	if(n === 1) {
		return a[n-1] * a[n] + 1;
	}
	return (a[n] * p_n[n-1]) + p_n[n−2];
}

function main(n) {
	'use strict';
	var a = [],
		p = [a[0],(a[0]*a[1]+1)],
		q = [1,a[1]];
	while(bool){

	}
	return;
}

console.log(main(process.argv[2]));