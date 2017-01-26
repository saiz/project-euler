function is_permutation(first,second){
	if(first.length !== second.length){
		return false;
	}
	var bool = true,
		i=0;
	while(i<first.length && bool){
		if(second.indexOf(first[i]) < 0){
			bool = false;
		}
	}
	return bool;
}
function muliples(number,n){
	var i =2,
		array = [];
	while(i<=n){
		array.push(number*i);
		i+=1;
	}
	return array;
}

function main() {
	'use strict';
	var i=1,
		array = [];
		bool = true;
	while(bool){
	array = muliples(i,6)
console.log(array)
	}
	return i;
}

console.log(main(process.argv[2]));