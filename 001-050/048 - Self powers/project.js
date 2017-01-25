function n_n(n){
	var total = [],
		i =0,
		j, k, temp, res;
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
			k=0;
			while( temp > 0){
				if(res[j+k] === undefined){
					res[j+k] = 0;
				}
				res[j+k] += temp%10;
				temp -= temp%10;
				temp /=10;
				k+=1;
			}
			j+=1;
		}
		total = res.slice(0);
		i+=1;
	}
	return total.reverse();
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i = 1,
		j,
		k,
		temp,
		num,
		result = [];
		while( i <= n){
			num = n_n(i).reverse();
			console.log('num',num);
			j=0;
			while(j<num.length){
				if(result[j] === undefined){
					result[j] = 0;
				}
				temp = result[j]+num[j];
				console.log('t',temp,result)
				k=0;
				while( temp > 0){
					result[j+k] += temp%10;
					temp -= temp%10;
					temp /=10;
					k+=1;
				}
				j+=1;
				console.log(result)
			}
			i+=1;
		}
		return result.reverse().join('');
	}

console.log(main(process.argv[2]));