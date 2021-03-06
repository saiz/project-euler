function fact(n){
	if(n <2){
		return 1;
	}
	return n * fact(n-1);
}
function comb(n,r){
	return fact(n)/(fact(r)*fact(n - r));
}
function next(array, end){
	if(array[1] - 1 === 0){
		array[0]+=1;
		array[1]=array[0];
	} else{
		array[1]-=1;
	}
	if( array[0] > end){
		return false;
	}
	return true;
}
function main() {
	'use strict';
	var array =[1,2],
		count = 0,
		max=Math.pow(10,6);
	while(next(array,100)){
		if(comb(array[0],array[1]) > max){
			count +=1;
		}
	}
	return count;
}

console.log(main(process.argv[2]));