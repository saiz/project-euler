var args = process.argv.slice(2);
function branches(array,index, total){
	if(array[index] === 1){
		return [total];
	}
	var i=0, rem = total / Math.floor(total / array[index]);
	var arr = [];
	while(i <=total){
		arr.push(i);
		i+= rem;
	}
	return arr;
}
function count( arr, index, remainder) {
	if (remainder < 0) { //remainder less than 0, overshoot
		return 0;
	}
	if (remainder === 0) { //equal to remainder, exact match
		return 1;
	}
	if (index === arr.length && remainder > 0) { //greater than remainder + index out of scope
		return 0;
	}
	return count(arr,index,remainder - arr[index]) + count(arr,index+1,remainder);
}

function main(n){
	'use strict';
	var money =[1,2,5,10,20,50,100,200];
	return count(money,0,200);
}
console.log(main());
