function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 2,
		index = 1,
		product = 1,
		power = 1;
	while(i <= n){
		if(index >= Math.pow(10,power) - String(i).length){
			product *= parseInt(String(i)[Math.pow(10,power) - index -1]);
			power+=1;
		}
		index += String(i).length;
		i+=1;
	}
	return product;
}

console.log(main(process.argv[2]));