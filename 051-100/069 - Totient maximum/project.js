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
function inverse_eratosthenes(n) {
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
        if(!array[i]) {
            output.push(i);
        }
    }
    return output;
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
	var i =0,
		n = Math.pow(10,6),
		max = {
			v:0,
			k:0
		},
		slieve = inverse_eratosthenes(n),
		j, temp;
		console.log(slieve.length);
	while(i < slieve.length){
		j = slieve[i];
		temp = relative_prime(j);
		if(j/temp > max.v){
			//console.log(i,temp, i/temp);
			max.v = j/temp;
			max.k = j;
		}
		console.log(j);
		i+=1;
	}
	return max;
}

console.log(main(process.argv[2]));