/*jslint white:true, for:true */
function main(max) {
	'use strict';
	//13195
	//5 * 7 * 13 * 29
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
	var i =2, arr = [];
	while(i <max){
		if((prime(i)>0) && (max % prime(i) === 0)){
			arr.push(prime(i));
			max /= prime(i);
			i=2;

		} else{
			i+=1;
		}
	}
	arr.push(max);
	console.log(arr);

}
main(600851475143 );