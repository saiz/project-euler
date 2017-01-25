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
function endindex(n,sums){
	var i=0;
	if(sums.indexOf(n)> -1){
		return sums.indexOf(n);
	}
	while(sums[i]< n){
		i+=1
	}
	return i-1;
}
function main() {
	'use strict';
	var end = Math.pow(10,6),
		prime = eratosthenes(end),
		sum=[0],
		i=0;
	while(i<prime.length){//sum slieve
		sum.push(sum[sum.length-1] + prime[i]);
		i+=1;
	}
	var end;
	while(i<prime.length){//sum slieve


		i+=1;
	}
	console.log(prime.length);
	console.log(sum.length);
	return;
}

console.log(main(process.argv[2]));