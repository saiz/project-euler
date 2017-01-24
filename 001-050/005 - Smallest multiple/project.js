/*jslint white:true, for:true */
function main(max) {
	'use strict';
	function prime_dict(max){
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
		var i =2, arr = {};
		while(i <max){
			if((prime(i)>0) && (max % prime(i) === 0)){
				if(arr[String(prime(i))] === undefined){
					arr[String(prime(i))] = 1;
				} else{
					arr[String(prime(i))] +=1;
				}
				max /= prime(i);
				i=2;

			} else{
				i+=1;
			}
		}
		if(arr[String(max)] === undefined){
			arr[String(max)] = 1;
		} else{
			arr[String(max)] +=1;
		}
		return arr;
	}
	var i,key, master_obj = {}, total = 1;
	for (i=1; i<= max; i+=1){
		for(key in prime_dict(i)){
		  if(master_obj[key] === undefined){
		  	master_obj[key] = prime_dict(i)[key];
		  } else if(master_obj[key] < prime_dict(i)[key] ){
		  	master_obj[key] = prime_dict(i)[key];
		  }
		}
	}
	for(key in master_obj){
		total *= Math.pow( parseInt(key,10), master_obj[key]);
	}
	console.log(total);
}
main(20);