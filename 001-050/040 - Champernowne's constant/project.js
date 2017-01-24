function d(n,i, str){
	if(n < str.length){
		return parseInt(str[n-1],10);
	}
	str.concat(String(i).split(""));
	i+=1;
	d(n, i, str);
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		str = [],
		sum =1;
		while(i <= n){
			sum *= d(i,1,str);
			i*=10;
		}
	console.log(str);
	return sum;
}

console.log(main(process.argv[2]));