function next(arr,end){
	if(arr[0]=== end){
		return false;
	}
	arr[0] +=1;
	return true;
}
function main() {
	'use strict';
	var _i=[0],i,_j=[0],j;
	while(next(_i,Math.pow(10,2))){
		i =_i[0];
		_j=[0];
		while(next(_j,Math.pow(10,2))){
			j =_j[0];
			console.log(Math.pow(i,j));
		}
	}
	return;
}

console.log(main(process.argv[2]));