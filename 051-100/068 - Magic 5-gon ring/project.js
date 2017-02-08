function len(n){
	if(n === 1){
		return n;
	}
	return  n + len(n-1);
}
function len2(n,m){
	if(m === 1){
		return n;
	}
	return  n + len2(n-1, m-1);
}
function comb (m, n){
	var arr = [],
		i,j,k;
	for(i=1;i<=m;i+=1){
		for(j=1;j<i;j+=1){
			for(k=1;k<j;k+=1){
				if(i+j+k === n){
					arr.push([i,j,k]);
				}
			}
		}
	}
	return arr;
}
function main() {
	'use strict';
	var n = 10, // number 1 - n
		m = 5, // number of pairs
		d = 3, // length of comb
		min = len(d) + m,
		max = len2(n,3),
		i = min, matrix;
		while(i <= max){
			matrix = comb(n, i);
			if(matrix.length === d){
				console.log(matrix);
				console.log(n,i);
				console.log("---");
			}
			i+=1;
		}

	return;
}


console.log(main(process.argv[2]));