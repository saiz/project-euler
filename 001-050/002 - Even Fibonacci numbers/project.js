/*jslint white:true, for:true */
function main(max) {
	'use strict';
	var total = 0,
		last = 0,
		current =1,
		temp;

	while(current<max){
		if(current %2 ===0){
			total += current;
		}
		temp = last;
		last = current;
		current += temp;
	}
	console.log(total);
}
main(4000000);