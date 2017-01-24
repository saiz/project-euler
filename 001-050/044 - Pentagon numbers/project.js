function p(n){
	return n*(3*n -1)/2;
}
function pentagonal_array(){
	var array = [],
		i = 1;
	while(array.length < 3){
		array.push(p(i));
		i+=1;
	}
	return array;
}
function pentagonal(array,n){
	while(n > array.length -1){
		array.push(p(array.length));
	}
	return array[n-1];
}
function check(array,a,b){
	var sum =  pentagonal(array,a) + pentagonal(array,b),
		diff = Math.abs(pentagonal(array,a) - pentagonal(array,b));
	if(array.indexOf(sum)>=0 && array.indexOf(diff)>=0){
		return true;
	}
	return false
}
function main() {
	'use strict';
	var array = pentagonal_array(),
		i = 2, j =1, bool = true;
	while(bool){
		if()
	}
	return;
}

console.log(main(process.argv[2]));