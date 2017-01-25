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
function eratosthenes(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];
    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
}
function next_prim(array){
	var i = array[array.length -1] +2;
	while(!isPrime3(i)){
		i+=2;
	}
	return i;
}
function check_prime(n,array,sum){
	while(n >array[array.length-1]){
		array.push(next_prim(array));
		sum.push(sum[sum.length-1] + array[array.length-1]);
	}
	if( array.indexOf(n)> -1){
		return true;
	}
	return false;
}
function prime_length(num,sum){
	if(sum.indexOf(num)>-1){
		return sum.indexOf(num);
	}
	var i =0,
		bool =true;
	while(i<sum.length && bool){
		if(sum[sum.length-1] - sum[i] === num){
			bool =false;
		}
		i+=1;
	}
	i-=1;
	return sum.length - i;
}
function main() {
	'use strict';
	var end = Math.pow(10,6),
		prime = eratosthenes(end),
		sum=[0];
		i=0;
	while(i<prime.length){
		sum.push(sum[sum.length-1] + prime[i]);
		i+=1;
	}
			console.log(prime.length);
			console.log(sum.length);
	return;
}

console.log(main(process.argv[2]));