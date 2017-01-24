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
		array.push(p(array.length + 1));
	}
	return array[n];
}
function check(array,a,b){
	var i = pentagonal(array,a),
		j = pentagonal(array,b);
	var sum =  i + j,
		diff = Math.abs(i - j);
	while(sum > array[array.length-1] || diff > array[array.length-1]){
		array.push(p(array.length + 1));
	}
	if(array.indexOf(sum)>=0 && array.indexOf(diff)>=0){
		return true;
	}
	return false;
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
	}
	return[array[i],array[j]];
}

console.log(main(process.argv[2]));