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
	if(sums.indexOf(n) > -1){
		return sums.indexOf(n);
	}
	var i=0;
	while(sums[i] < n){
		i+=1;
	}
	return i;
}
function main() {
	'use strict';
	var end = Math.pow(10,6),
		prime = eratosthenes(end),
		sum=[],
		i=0;
	while(i<prime.length){//sum slieve
		if(sum.length === 0 ){
			sum.push(prime[i]);
		} else{
			sum.push(sum[sum.length-1] + prime[i]);
		}
		i+=1;
	}
	var end,j, length, maxlength = 0, number;
	i=0;
	while(i<prime.length){//sum slieve
		end = endindex(prime[i],sum);
		if(sum[end] === prime[i]){
			length = end;
		} else{
			j=0;
			while(j<end){
				if(sum[end] - sum[j] === prime[i]){
					length = end -j;
					j=end;
				}
				j+=1
			}
		}
		if(length >maxlength){
			maxlength = length;
			number = prime[i];
		}
		i+=1;
	}
	return number;
}

console.log(main(process.argv[2]));