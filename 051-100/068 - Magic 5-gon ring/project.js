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
function hashmap(m){
	var i, j, k,hash={};
	for(i=0;i<m.length;i+=1){
		for(j=0;j<m[i].length;j+=1){
			hash[m[i][j]] =[];
			for(k=0;k<m[i].length;k+=1){
		if()
				hash[m[i][j]].push(m[i][k]);
			}
		}
	}
	return hash;

}
function main() {
	'use strict';
	var n = 6, // number 1 - n
		m = 3, // number of pairs
		d = 3, // length of comb
		len = 9,
		matrix = comb(n, len),
		dict = {};
		dict = hashmap(matrix);
		console.log(dict);
		console.log(n,len);
		console.log("---");

	return;
}


console.log(main(process.argv[2]));