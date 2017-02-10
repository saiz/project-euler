function comb (m, n){
	var arr = {},
		i,j,k;
	for(i=m;i>0;i-=1){
		for(j=m;j>0;j-=1){
			if(j !== m){
				k = n - i - j;
				if(k>0 && k<=m && k!==i && k!==j){
					if(arr[i] === undefined){
						arr[i] = 0;
					}
					arr[i]+=1;
				}
			}
		}
	}
	i=0;
	return arr;
}
function high(dict){
	var key,
		max = {
			v:0,
			k:0
		};
	for (key in dict){
		if(dict[key] > max.v){
			max.k = parseInt(key,10);
			max.v =  parseInt(dict[key],10) ;
		}
	}
	delete dict[max.k];
	return max.k;
}
function high_array(dict){
	var arr = [];
	while(Object.keys(matrix).length > 0){
		arr.push(high(dict));
	}
	return arr;
}
function main() {
	'use strict';
	var n = 10, // number 1 - n
		m = 5, // number of pairs
		d = 3, // length of comb
		len = 16,
		i =Math.pow(10,9),
		str, arr,
		matrix = comb(n, len);
		arr= high_array(comb(n, len));
		console.log(Object.keys(matrix).length);
		console.log(high(matrix))
		console.log(matrix);



	return;
}


console.log(main(process.argv[2]));