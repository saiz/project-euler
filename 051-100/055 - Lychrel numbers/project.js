function next(arr,end){
	if(arr[0]!== end){
		return true;
	}
	arr[0] +=1;
	return true;
}

function main() {
	'use strict';
	var _i =[0],i;
	while(next(_i,Math.pow(10,4))){
		i = _i[0];
		console.log(i,_i);
	}
	return;
}

console.log(main(process.argv[2]));