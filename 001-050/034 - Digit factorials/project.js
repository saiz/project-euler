function fact(array,n) {
	'use strict';
	if(n < array.length){
		return array[n];
	}
	if(array.length <= 1){
		array.push(1);
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
	var array = [], result = [], i= 3,j,temp = [];
	while(i < 2540161){
		temp = String(i).split("");
		for(j=0;j<temp.length;j+=1){
			temp[j] = fact(array, parseInt(temp[j],10));
		}
		if(i === temp.reduce(add, 0)){
			result.push(i);
		}
		i+=1;
	}
	return result.reduce(add, 0);
}

console.log(main(process.argv[2]));