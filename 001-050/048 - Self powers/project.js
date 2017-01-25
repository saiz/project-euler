function n_n(n){
	var total = [],
		i =0,
		j, k, temp;
		total = String(n).split("");
	while(i < total.length){ //inital
		total[i] = parseInt(total[i],10);
		i+=1;
	}
	i=0;
	while(i < n -1){ // do this n times
		j = 0;
		while(j < total.length){ // split total by index
			temp = total[j] * n;
			k=0;
			while( k < temp.length){
				k+=1;
			}
			j+=1;
		}
		i+=1;
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