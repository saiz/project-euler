function next(arr,end){
	if(arr[0]=== end){
		return false;
	}
	arr[0] +=1;
	return true;
}
function main() {
	'use strict';
	var a,b,max;
	for(a=0;a<=max;a+1){
		for(b=0;b<=max;b+1){
			console.log(Math.pow(a,b));
		}
	}
	return;
}

console.log(main(process.argv[2]));