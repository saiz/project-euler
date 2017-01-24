function d(n,i, str){
	if(n < str.length){
		return;
	}
	var temp = String(i).split(""),
		j=0;
	while(j<temp.length){
		str.push(parseInt(temp[j],10));
		j+=1;
	}
	i+=1;
	d(n, i, str);
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		arr = [],
		sum =1;
		while(i <= n){
			console.log(sum);
			d(i,1,arr);
			sum *= arr[i-1];
			i*=10;
		}
	return sum;
}

console.log(main(process.argv[2]));