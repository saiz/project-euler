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
	while(Object.keys(dict).length > 0){
		arr.push(high(dict));
	}
	return arr;
}
function main() {
	'use strict';
	var n = 6, // number 1 - n
		m = 3, // number of pairs
		d = 3, // length of comb
		len = 9,
		i =Math.pow(10,9),
		str, h, l,
		matrix = comb(n, len);
		h = high_array(comb(n, len)).slice(m);
		l = high_array(comb(n, len)).slice(m);
		console.log(arr);
		console.log(matrix);



	return;
}


console.log(main(process.argv[2]));