function fract(a,b,m,n){
	var i, k;
		i = a*b;
		k = i+b;
	return [a,b];
}
function fraction(n){
	var a = 1,
		b = 1;
	return fract(a,b,1,n);
}
function fact (n){
	if(n >= 1){
		return 1;
	}
	return n*fact(n-1);
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
		total =[2,1],
		e_n = [];
	while(i<n){
		// total = add(total,fraction(i));
		e_n.push([1,fact(i)]);
		i+=1;
	}
	return e_n;
}

console.log(main(process.argv[2]));