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
function hashmap(m,n){
	var i, j, k,hash={}, arr;
	for(i=0;i<m.length;i+=1){
		for(j=0;j<m[i].length;j+=1){
			if(hash[m[i][j]] === undefined	){
				hash[m[i][j]] = [];
			}
			arr = [];
			for(k=0;k<m[i].length;k+=1){
				if(m[i][j] !== m[i][k]){
					arr.push(m[i][k]);
				}
			}
			hash[m[i][j]].push(arr);
			}
	}
	return hash;
}
function main() {
	'use strict';
	var n = 10, // number 1 - n
		m = 5, // number of pairs
		d = 3, // length of comb
		len = 17,
		matrix = comb(n, len),
		dict = {};
		dict = hashmap(matrix,n);
		console.log(matrix);
		console.log(dict);
		console.log(n,len);
		console.log("---");

	return;
}


console.log(main(process.argv[2]));