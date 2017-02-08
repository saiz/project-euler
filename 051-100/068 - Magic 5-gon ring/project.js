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
function comb (n){
	var arr = [],
		i,j;
	for(i=1;i<n-3;i+=1){
		for(j=1;j<i;j+=1){
			console.log(i,j,n-i-j);
		}
	}
}
function main() {
	'use strict';
	var n = 6, // number 1 - n
		m = 3, // number of pairs
		d = 3, // length of comb
		min = len(d) + m,
		max = len2(n,3),
		i = min;
		comb(i)
		while(i <= max){
			//console.log(i);
			i+=1;
		}

	return;
}


console.log(main(process.argv[2]));