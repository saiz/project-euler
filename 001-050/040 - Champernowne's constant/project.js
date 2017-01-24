function d(n,i, str){
	if(n < str.length){
		return parseInt(str[n],10);
	}
	str += String(i);
	i+=1;
	console.log(str);
	return d(n, i, str);
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		sum =1;
		while(i <= n){
			sum *= d(i,1,'');
			console.log(,'\'sum);
			i*=10;
		}
	return sum;
}

console.log(main(process.argv[2]));