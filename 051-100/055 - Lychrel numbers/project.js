function next(arr,end){
	if(arr[0]=== end){
		return false;
	}
	arr[0] +=1;
	return true;
}
function rev(i) {
	parseInt(String(i).reverse(),10)
}
function add_rev(i){
	return i +rev(i);
}
function test(num,i,end){
	if(i > end){
		return 0;
	}
	return test(add_rev(i),i+1,end);
}

function main() {
	'use strict';
	var _i =[0],i;
	while(next(_i,Math.pow(10,4))){
		i = _i[0];
		console.log(test(12,0,50));
	}
	return;
}

console.log(main(process.argv[2]));