function d(index,last,n){
	var str = String(last);
	if(index + str.length > n){
		return str[n-index];
	}
	d(index,last,n)
	index += str.length;

}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		product = 1;
	while(i <= n){

		product *= d()
	}
	return sum;
}

console.log(main(process.argv[2]));