/*jslint white:true, for:true */
function collatz(n) {
	'use strict';
	var arr = [n];
	while(n !== 1){
		if(n%2===0){
			n = n/2;
		} else {
			n = 3*n + 1;
		}
		arr.push(n);
	}
	return arr;
}
function main() {
	'use strict';
	var input = 1000000,i = 0, max = 0,len = 0, col;
	for(i=input-1;i>=2;i-=1){
		col = collatz(i);
		if(col.length > len){
			max = i;
			len = col.length;
		}
	}
	return max;
}
console.log(main());