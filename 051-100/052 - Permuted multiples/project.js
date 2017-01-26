function is_permutation(first,second){
	first = String(first);
	second = String(second);
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
function is_array_perm(num,array){
	var i =0,
		bool=true;
while(i<first.length && bool){
		if(second.indexOf(first[i]) < 0){
			bool = false;
		}
	}
}

function main() {
	'use strict';
	var i=1,
		array = [],
		bool = true;
	while(bool){
		array = muliples(i,6)
		console.log(array);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));