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

function main() {
	'use strict';
	var max = Math.pow(10,7),
		primes = eratosthenes(Math.sqrt(max)),
		i=0,
		j;
	while(i<primes.length){
		j=i+1;
		while(j<primes.length ){
			if (primes[i]*primes[j] < max) {
				console.log(primes[i]*primes[j]);
			}
			j+=1;
		}
		i+=1;
	}
		console.log(primes.length)
	// while(i<n){
	// 	if(i < min*phi(i)){
	// 		j = String(i);
	// 		k = String(phi(i));
	// 		if(perm(j,k)){
	// 			min = i/phi(i);
	// 			console.log(j, k,min);
	// 		}
	// 	}
	// 	// console.log(phi(i));
	// 	i+=1;
	// }
	return ;
}

console.log(main(process.argv[2]));