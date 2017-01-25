function n_n(n){
	var result = [1],
		i =0;
	while(i <n){
		result[0] *= n;
	}
	return result;
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i = 1,
		j,
		num,
		result = [];
		while( i < n){
			console.log(n_n(i));
			i+=1;
		}
		return result;
	}

console.log(main(process.argv[2]));