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
		i+=1;
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
	while(i<array.length && bool){
		if(!is_permutation(num,array[i])){
			bool = false;
		}
		i+=1;
	}
	return bool;
}

function main() {
	'use strict';
	var i=1,
		array = [],
		bool = true;
	while(bool){
		array = muliples(i,6);
		if(is_array_perm(i,array)){
			bool = false;
		}
		i+=1;
	}
	return i - 1;
}

console.log(main(process.argv[2]));