function main(n) {
	'use strict';
	var result = 0,
		modulo = 10000000000,
		i,j, temp;
	for (i = 1; i <= 1000; i+=1) {
	    temp = i;
	    for (j = 1; j < i; j+=1) {
	        temp *= i;
	        if (temp >= modulo) {
	            temp %= modulo;
	        }
	    }
	    result += temp;
	    result %= modulo;
	}
	return result;
}

console.log(main(process.argv[2]));