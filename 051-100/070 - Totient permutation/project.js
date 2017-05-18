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
	var max = Math.pow(10,7),
		minratio = Infinity,
		minphi = Infinity,
		min = Infinity,
		primes = eratosthenes(Math.sqrt(max)),
		i,j;
	while(i<primes.length){
		j=i+1;
		while(j<primes.length){
			if(primes[i]*primes[j]> max){
				break;
			}
			var num = primes[i]*primes[j];,
				phi = (primes[i] - 1) * (primes[j] - 1),
				ratio = num/phi;
			if(ratio < minratio && is_permutation(String(num)String(phi))){
				minratio = ratio;
				min =num;
				minphi = phi;
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