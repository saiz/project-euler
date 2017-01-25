function isPrime3(n) {
	'use strict';
	if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
	if (n%2===0) {return (n===2);}
	if (n%3===0) {return (n===3);}
	var m=Math.sqrt(n), i;
	for (i=5;i<=m;i+=6) {
		if (n%i===0)     {return false;}
		if (n%(i+2)===0) {return false;}
	}
	return true;
}
function prime_factors(prime,n){
	var array = [],
		i =0;
	while(prime[i] <= Math.sqrt(n)){
		if(n%prime[i]){
			array.push(i)
		}
		i+=1;
	}
	return array;
}
function main(n) {
	'use strict';
	var prime = [],
		i =2,
		count =true;
	while(bool){
		if(isPrime3(i)){
			prime.push(i);
		}
		if(prime_factors(i).length === n){

		}

		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));