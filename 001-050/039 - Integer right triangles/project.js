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
function pythagoras(a,b,c){
	if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
		return true;
	}
	return false;
}
function main() {
	'use strict';
	var end = 120,
		arr = [1,1,end -2];
		while(next_split(arr,end)){
			if(pythagoras(arr[0],arr[1],arr[2])){
				console.log(arr.sort());
			}
		}
	return;
}

console.log(main(process.argv[2]));