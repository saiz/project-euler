function main(n) {
	'use strict';
	n= parseInt(n,10);
	var result = 0,
		modulo = Math.pow(10,10),
		i,j, temp;
	for (i = 1; i <= n; i+=1) {
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