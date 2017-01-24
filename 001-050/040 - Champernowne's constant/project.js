function d(n, str){
	if(n < str.length){
		return str[n];
	}
	str += str.length-1;
	d(n, str)
}
function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));