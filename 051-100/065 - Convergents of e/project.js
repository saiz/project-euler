var BigNumber = require('bignumber.js');
function fract(a,b,m,n){
	var i, k;
		i = b + 1;
		k = i*2 +1;
	if(m < n){
		return fract(k,i,m+1,n);
	}
	return [a,b];
}
function fraction(n){
	var a = 2,
		b = 1;
	return fract(a,b,1,n);
}
function fact (n){
	//var i = new BigNumber(n);
	if(n <= 1){
		return 1;
	}
	return n*(fact(n-1));
}
function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function add(a,b){
	var l = lcm(a[1],b[1]);
	return[a[0]*l/a[1] + b[0]*l/b[1],l];
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =0,
		total =[1,1],
		e_n = [];
	while(i<n){
		// total = add(total,fraction(i));
		console.log(fract(i));
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));