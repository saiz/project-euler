function fact(array,n) {
	'use strict';
	if(n === 0 ){
		return 0;
	}
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
function add(a,b){
	return a+b;
}
function main() {
	'use strict';
	var array = [], result = [], i= 3,j,temp = [], sum;
	while(i < 2540161){
		temp = String(i).split("");
		for(j=0;j<temp.length;j+=1){
			temp[j] = fact(array, parseInt(temp[j],10));
		}
		console.log(temp);
		sum = temp.reduce(add, 0);

		if(i === sum){
			result.push(i);
		}
		i+=1;
	}
	console.log(array.length, i);
	return result;
}

console.log(main(process.argv[2]));