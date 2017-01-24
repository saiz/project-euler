function d(n,i){
	i=1,
	index = 1,
	bool = true,
	j,temp, res;
	while(bool){ // i = 1 -> n
		temp = String(i).split(""); // split i eg 1012 = 1,0,1,2
		j=0;
		while(j<temp.length){
			j+=1;
			index+=1;
			if(index === n){ //compare index to final position;
				bool = false;
				res = temp[j];
				j = temp.length;
			}
		}
		i+=1;
	}
	return parseInt(res,10);
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var i = 1,
		arr = [],
		sum =1;
		while(i <= n){
			sum *= arr[i-1];
			i*=10;
		}
	return sum;
}

console.log(main(process.argv[2]));