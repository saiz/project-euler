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
			j= 0;
			num = binary(i).reverse();
			console.log(binary(i));
			while(j<num.length){

			}
			i+=1;
		}
		return result;
	}

console.log(main(process.argv[2]));