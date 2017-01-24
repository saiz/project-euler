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
	while(n > array.length){
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
		i = 2, j =2, bool = true;
	while(bool){
		j -=1;
		if(j === 0){
			i+=1;
			j= i-1;
		}
		if(check(array,i,j)){
			bool = false;
		}
		console.log(i,j)
		//console.log(array[i],array[j])
		console.log(array);
	}
	return[array[i],array[j]];
}

console.log(main(process.argv[2]));