function p_n(a,p,n){
	if(n===0){
		return a[n];
	}
	if(n===1){
		return a[n-1] * a[n] + 1;
	}
	return a[n] * p[n−1] + p[n−2];
}

function main(n) {
	'use strict';
	n = parseInt(n,10);
	return;
}

console.log(main(process.argv[2]));