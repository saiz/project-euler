function eratosthenes(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [], i, j;
    // Make an array from 2 to (n - 1)
    for (i = 0; i < n; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    // All array[i] set to true are primes
    for (i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
}
function inverse_eratosthenes(n){
	var slieve =eratosthenes(n),
	array= [],
	i = 2;
	while(i <n){
		if(slieve.indexOf(i) === -1){
			array.push(i);
		}
		i+=1;
	}
	return array;
}
function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
}
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
		slieve = inverse_eratosthenes(n),
		temp;
		console.log(slieve.length);
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