//1 + 1/2 = 3/2 = 1.5
function gcd(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
}
function sqrt_two(n){
	if( n === 0 ){
		return 1;
	}
	return 1 + 1/( 1 + sqrt_two(n-1) );
}
function fract(a,b,m,n){
	var i, k;
	if(m < n){
		i = a+b;
		k = gcd(b+i,i);
		return fract((b+i)/k,i/k,m+1,n);
	}
	return [a,b];
}
function fraction(n){
	return fract(3,2,1,n);
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i = 1,
		count = 0,
		arr;
	while(i <=n){
		arr = fraction(i);
		console.log(arr);
		if(String(arr[0]).length > String(arr[1]).length){
			count +=1;
		}
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));