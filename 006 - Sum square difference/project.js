/*jslint white:true, for:true */
function main(max) {
	'use strict';
	function square_of_sum(number){
		var total = 0,i;
		for(i=1;i<= number; i+=1){
			total +=i;
		}
		return Math.pow(total,2);
	}
	function sum_of_square(number){
		var total = 0,i;
		for(i=1;i<= number; i+=1){
			total +=Math.pow(i,2);
		}
		return total;
	}
	console.log( square_of_sum(max) - sum_of_square(max));
}
main(100);