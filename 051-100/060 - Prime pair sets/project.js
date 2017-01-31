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
function isPrime3(n) {
    'use strict';
    if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
    if (n%2===0) {return (n===2);}
    if (n%3===0) {return (n===3);}
    var m=Math.sqrt(n), i;
    for (i=5;i<=m;i+=6) {
        if (n%i===0)     {return false;}
        if (n%(i+2)===0) {return false;}
    }
    return true;
}

function reversibly_prime(a,b){
	var i = parseInt(String(a)+String(b),10),
		j = parseInt(String(b)+String(a),10);
	return isPrime3(i) && isPrime3(j);
}
function compare_array(small, large){
	var i =0,
	bool = true;
	while(i<small.length && bool){
		if(large.indexOf(small[i]) === -1){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function add(a, b) {
    return a + b;
}
function main() {
	'use strict';
	var prime = eratosthenes(Math.pow(10,4)),
	dict = {},
	matrix = [],
	length = 5,
	i,j;
	for(i=0;i<prime.length;i+=1){
		dict[prime[i]] =[]
		for(j=0;j<prime.length;j+=1){
			if(reversibly_prime(prime[i],prime[j])){
				dict[prime[i]].push(prime[j]);
			}
		}
	}
	var index = [];
	for(i=0;i<prime.length;i+=1){
		index = [];
		index.push(prime[i]);
		for(j=0;j<dict[prime[i]].length;j+=1){
			if(compare_array(index,dict[dict[prime[i]][j]])){
				index.push(dict[prime[i]][j]);
			}
		}
		if(index.length >=length){
			matrix.push(index.slice(0).sort());
		}
	}
	i=0;
	var min = Math.pow(2, 53), sum;
	while(i<matrix.length){
		sum = matrix[i].reduce(add, 0);
		if(sum < min){
			min = sum;
		}
		i+=1;

	}
	return sum;
}

console.log(main(process.argv[2]));