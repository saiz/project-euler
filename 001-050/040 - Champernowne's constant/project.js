function d(index,last,n){
	var str = String(last);
	if(index + str.length > n){
		return str[n-index];
	}
	index += str.length;
	return d(index,last,n);

}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		index = 1,
		product = 1;
	while(i <= n){
		console.log(d(index,i,n));
	}
	return sum;
}

console.log(main(process.argv[2]));