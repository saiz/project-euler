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
function nextprime(n){
	var bool = true;
	while(bool){
		n+=1;
		if(isPrime3(n)){
			bool = false;
		}
	}
	return n;
}
function goldbach(prime,n){
	var i = 0,
	bool = false,
	num;
	while(i < prime.length && !bool){
		num = Math.sqrt((n - prime[i])/2);
		if(num % 1 !== 0){
			bool = true;
		}
		i+=1;
	}
	return bool;
}
function main() {
	'use strict';
	var i =2,
		bool= true,
		prime = [2];
	while(bool){
		if(isPrime3(i)){
			prime.push(i);
		} else if (goldbach(prime,i) && i%2===1){
			console.log(i);
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));