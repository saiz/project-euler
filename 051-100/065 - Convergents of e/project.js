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
	var a =8,
		b = ;
	return fract(a,b,1,n);
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
	var i =1,
		total =[2,1];
	while(i<n){
		console.log(fraction)
		i+=1;
	}
	return total;
}

console.log(main(process.argv[2]));