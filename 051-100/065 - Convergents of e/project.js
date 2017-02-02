function fract(a,b,m,n){
	var i, k;
		i = a+b;
		k = i+b;
	if(m < n){
		return fract(k,i,m+1,n);
	}
	return [a,b];
}
function fraction(n){
	var a = 3,
		b = 2;
	return fract(a,b,1,n);
}

function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =0;
	while(i<n){
		console.log(fraction(i));
		i+=1;
	}
	return i;
}

console.log(main(process.argv[2]));