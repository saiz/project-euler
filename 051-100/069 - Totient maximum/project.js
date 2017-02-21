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
		n = 10,
		max = {
			v:0,
			k:0
		},
		temp;
	while(i<=n){
		temp =relative_prime(i);
if(temp > max.v){
max.v =tem
}
		console.log(i,temp, i/temp);
		//console.log("- - -");
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));