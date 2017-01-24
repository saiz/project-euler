function t(n){
	return n/2*(n+1);
}
function charcode (str){
	return str.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) +1;
}
function main() {
	'use strict';
	var i ='test';
console.log(charcode("a"),charcode("z"));
	return;
}

console.log(main(process.argv[2]));