function next_split(array,length){
	if(array[2] -1 !== 0){
		array[2] -= 1;
		array[1] += 1;
	} else {
		array[0] +=1;
		array[1] = 1;
		array[2] = length - array[0] - 1;
	}
	if(array[2] === 0){
		return false;
	}
	return true;
}
function array_equal(array1,array2){
	if(array1.length !== array2.length){
		return false;
	}
	var i =0,
		bool = true;
	while(i<array1.length && bool){
		if(array1[i]!==array2[i]){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function insert(array,matrix){
	if(matrix.length === 0){
		matrix.push(array);
	}
	var i =0,
		bool = true;
	while(i<matrix.length && bool){
		if(array_equal(matrix[i],array)){
			bool = false;
		}
	}
	if(bool){
		matrix.push(array);
	}
}
function pythagoras(a,b,c){
	if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
		return true;
	}
	return false;
}
function main(n) {
	'use strict';
	n = parseInt(n,10) || 0;
	if(n < 2){
		return [];
	}
	var end = n,
		arr = [1,1,end -2],
		matrix = [];
		while(next_split(arr,end)){
			if(pythagoras(arr[0],arr[1],arr[2])){
				insert(arr.slice(0).sort(),matrix);
			}
		}
	return arr;
}

console.log(main(process.argv[2]));