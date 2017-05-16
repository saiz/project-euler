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
function phi(n) {
	var res = 1,
	sieve = eratosthenes(n),
	i = 0;
	while(res * sieve[i] < n){
	    res *= sieve[i];
	    i++;
	}
	return res;
}

function main() {
	'use strict';
	var n = Math.pow(10,7),
		i = 2, min = Math.pow(2,52),
		slieve = eratosthenes(n);
	while(i<n){
		console.log(i);
		i+=1;
	}
	return min;
}

console.log(main(process.argv[2]));