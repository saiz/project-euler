/*jslint white:true, for:true */
function main(max) {
	'use strict';
	function prime(number){
		if(number < 1){
			return -1;
		}
		if(number <= 3){
			return number;
		}
		var i;
		for(i=2; i<number;i+=1){
			if(number%i === 0){
				return -1;
			}
		}
		return number;
	}
	var i = 1,
		j =1;
	while ( j !== max+1){
		i+=1;
		if(prime(i) >0){
			j+=1;
		}
	}
	j-=1;
	console.log(prime(i));
}
main(10001);
