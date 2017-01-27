function next(arr,end){
	if(arr[0]!== end){
		return false;
	}
	arr[0] +=1;
	return true;
}

function main() {
	'use strict';
	var i =[0];
	while(next(i,Math.pow(10,4))){
		console.log(i);
	}
	return;
}

console.log(main(process.argv[2]));