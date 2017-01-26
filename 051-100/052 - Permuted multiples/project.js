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
		array.push(number*n)
	}
}

function main() {
	'use strict';
	var i=1,
		bool = true;
	while(bool){
	}
	return i;
}

console.log(main(process.argv[2]));