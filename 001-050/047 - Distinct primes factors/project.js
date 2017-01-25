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
	while(i < prime.length){
		if(n%prime[i] === 0){
			array.push(prime[i]);
		}
		i+=1;
	}
	return array;
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var prime = [],
		i =2,
		count = 0;
		result = [],
		num;
	while(count < n){
		if(isPrime3(i)){
			prime.push(i);
		}
		console.log(i, prime_factors(prime,i));
		if(prime_factors(prime,i).length === n){
			count +=1;
		}else{
			count = 0;
		}
		i+=1;
	}
	num = i - count -1;
	for(i=num;i<num +count+=1){
		result.push(i);
	}
	return result;
}

console.log(main(process.argv[2]));