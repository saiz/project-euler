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

function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));