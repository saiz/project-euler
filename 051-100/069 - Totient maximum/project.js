var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
function relative_prime(n){
	var total = 1,
		i=2;
		console.log(i)
	while(i < n){
		//console.log((n/i)%1)
		console.log(n,i,gcd(i,n))
		// if(gcd(i,n)>1){
		// 	console.log(n,i)
		// 	total +=1;
		// }
		i+=1;
	}
	return total;
}
function main() {
	'use strict';
	var i =2,
		n = 10,
		temp;
	while(i<=n){
		temp =relative_prime(i);
		console.log(i,temp, i/temp);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));