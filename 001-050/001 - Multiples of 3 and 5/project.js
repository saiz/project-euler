/*jslint white:true, for:true */
function main(max) {
	'use strict';
	var i, total = 0;
	for (i = 0; i < max; i+=1) {
		if( (i %3 === 0) || (i %5 === 0)){
			total += i;
		}
	}
	console.log(total);
}

main(1000);