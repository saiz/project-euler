function fact(array,n) {
	'use strict';
	if(n < array.length){
		return array[n];
	}
	if(array.length < 1){
		array.push(array.length);
	} else{
		array.push( array[array.length - 1] * (array.length ));
	}
	return fact(array,n);
}
function add(a,b){
	return a+b;
}
function main() {
	'use strict';
	var array = [1,1], result = [], i= 3,j,temp = [], sum;
	while(i < 2540161){
		temp = String(i).split("");
		for(j=0;j<temp.length;j+=1){
			temp[j] = fact(array, parseInt(temp[j],10));
		}
		sum = temp.reduce(add, 0);

		if(i === sum){
			result.push(i);
		}
		i+=1;
	}
	return result.reduce(add, 0);
}

console.log(main(process.argv[2]));