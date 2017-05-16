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
function checkAnagram(str1, tr2) {

    if (str1.length !== str2.length
      return false;

    var a = String(str1.split("").sort());
    var b = String(str2.split("").sort());

    return a === b;
}
function getAllFactorsFor(remainder) {
    var factors = [], i;
    for (i = 2; i <= remainder; i++) {
        while ((remainder % i) === 0) {
            factors.push(i);
            remainder /= i;
        }
    }
    return factors;
}
function phi(n) {
	if(n === 1){
		return 1;
	}
	var i = 0,
	factors = getAllFactorsFor(n),
	sum = 1;
	while(i <factors.length){
		sum *= (factors[i] -1);
		i+=1;
	}
	return sum;
}

function main() {
	'use strict';
	var n = Math.pow(10,7),
	min = Infinity,
	j, k,
	i=n-1;
	while(i>1){
		j = String(i);
		k = String(phi(i));
		if(perm(j,k)){
			console.log(j,k);
			// if(min > j/k){
			// 	min = j/k;
			// 	console.log(j, k,min);
			// }

		}
		i-=1;
	}
	return ;
}

console.log(main(process.argv[2]));