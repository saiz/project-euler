/*jslint white:true, for:true */
function main(max) {
	'use strict';
	//13195
	//5 * 7 * 13 * 29
	function palindrome(input){
		var str = String(input),
				  i = 0,
				  j = str.length -1;

		while(str[i] === str[j] ){
			if((i === j) || (i > j) ){
				return true;
			}
			i+=1;
			j-=1;
		}
		return false;
	}
	var x = max,
		y = max,
		end = max.toPrecision(1)/10,
		topvalue = 0;
	while( !((x === end -1) && (y === end -1))){
		if(palindrome(x*y)){
			if(x*y > topvalue){
				topvalue = x*y;
			}
		}
		if(y === end){
			x-=1;
			y=x;
		} else{
			y-=1;
		}
	}
	console.log(topvalue);
}
main(999);