var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
function relative_prime(n){
	var total = 1,
		i=2;
		//console.log(i);
	while(i < n){
		//console.log(n,i,gcd(n,i));
		if(gcd(n,i) === 1){
			total+=1;
		}
		i+=1;
	}
	return total;
}
function main() {
	'use strict';
	var i =2,
		n = Math.pow(10,6),
		max = {
			v:0,
			k:0
		},
		temp;
	while(i<=n){
		temp = relative_prime(i);
		if(i/temp > max.v){
			//console.log(i,temp, i/temp);
			max.v = i/temp;
			max.k = i;
		}
		console.log(i);
		i+=1;
	}
	return max;
}

console.log(main(process.argv[2]));