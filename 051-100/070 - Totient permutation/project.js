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

function is_permutation(first,second){
	first = String(first);
	second = String(second);
	if(first.length !== second.length){
		return false;
	}
	var bool = true,
		i=0;
	while(i<first.length && bool){
		if(second.indexOf(first[i]) < 0){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function main() {
	'use strict';
	var best = 1;
	var phiBest = 1;
	var bestRatio = Infinity;

	var limit = 10000000;
	var lowerbound = 2000;
	var upperbound = 5000;
	var primes = eratosthenes(upperbound);

	for (var i = 0; i < primes.length; i++) {

	    for (var j = i+1; j < primes.length; j++) {
	        var n = primes[i] * primes[j];
	        if (n > limit) break;

	        var phi = (primes[i] - 1) * (primes[j] - 1);
	        var ratio = ( n) / phi;

	        if (is_permutation(n, phi) && bestRatio > ratio) {
	            best = n;
	            phiBest = phi;
	            bestRatio = ratio;
	        }
	    }
	}
	console.log(best, phiBest,bestRatio);
	return ;
}

console.log(main(process.argv[2]));