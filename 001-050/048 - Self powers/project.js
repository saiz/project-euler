function n_n(n){
	var total = [],
		i =0,
		j, k, temp, res, rem;
		total = String(n).split("");
	while(i < total.length){ //inital
		total[i] = parseInt(total[i],10);
		i+=1;
	}
	total.reverse();
	i=0;
	while(i < n -1){ // do this n times
		j = 0;
		res = [];
		while(j < total.length){ // split total by index
			temp = total[j] * n;
			if(temp === 0){
				res[j] = 0;
			}
			else{
				k=0;
				while( temp > 0){
					if(res[j+k] === undefined){
						res[j+k] = 0;
					}
					res[j+k] += temp%10;
					temp -= temp%10;
					temp /=10;
					if(res[j+k]>9){
						res[j+k] = res[j+k]%10;
						if(res[j+k+1] === undefined){
							res[j+k+1] = 0;
						}
						res[j+k+1] +=1;
					}
					k+=1;
				}
			}
			j+=1;
		}
		total = res.slice(0,10);

		i+=1;
	}
	return total.reverse();
}
function main(n) {
	'use strict';
	var result = 0,
		modulo = 10000000000,
		i,j, temp;

	for (i = 1; i <= 1000; i+=1) {
	    temp = i;
	    for (j = 1; j < i; j+=1) {
	        temp *= i;
	        if (temp >= Math.pow(2, 53) - 1 / 1000) {
	            temp %= modulo;
	        }
	    }

	    result += temp;
	    result %= modulo;
	}
	return result;
}

console.log(main(process.argv[2]));