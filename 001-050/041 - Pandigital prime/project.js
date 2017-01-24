function pandigital(n){
	var str = String(n),
		i = 1,
		bool = true;
	while(i<=str.length && bool){
		if(!str.includes(String(i))){
			bool = false;
		}
		i+=1;
	}
	return bool;
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
function create_pandigital(n) {
	var str ='';
	while(n > 0){
		str += String(n);
		n-=1;
	}
	return parseInt(str,10);
}
function check_prime(n,array){
	if(array.indexOf(n) >= 0){
		return true;
	}
}
function main(n) {
	'use strict';
	n = parseInt(n,10) || 0;
	var array = eratosthenes(create_pandigital(n)),
		i = array.length -1,
		bool = true;
	while (i >= 0 && bool){
		if(pandigital(array[i])){
			bool = false;
		}
		i-=1;
	}
	return array[i];
}

console.log(main(process.argv[2]));