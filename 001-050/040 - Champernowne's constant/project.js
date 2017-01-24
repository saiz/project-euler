function d(n,i){
	i=1;
	index = 0;
	while(i < n){
		var temp = String(i).split(""),
			j=0;
		while(j<temp.length){
			index= temp[j];
			j+=1;
			i+=1;
		}
	}
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		arr = []		sum =1;
		while(i <= n){
			sum *= arr[i-1];
			i*=10;
		}
	return sum;
}

console.log(main(process.argv[2]));