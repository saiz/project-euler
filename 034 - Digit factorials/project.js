function fact(array,n) {
	'use strict';
	if(n <= array.length){
		return array[n -1];
	}
	if(array.length < 1){
		array.push(1);
	} else{
		array.push( array[array.length - 1] * (array.length + 1));
	}
	return fact(array,n);
}
function main() {
	'use strict';
	var array = [], i= 3,j,temp = [], sum;
	while(i < Number.MAX_SAFE_INTEGER){
		temp = String(i).split("");
		for(j=0;j<temp.length;j+=1){
			temp[j] = fact(array, parseInt(temp[j],10));
		}
		sum = temp.reduce(function(a,b){
			return a+b;
		});

		if(i === sum){
			console.log(i);
		}
		i+=1;
	}
	return array;
}

console.log(main(process.argv[2]));