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
	var i = array[0],
		j = array[1];
	if(j -1 === 0){
		i+=1;
		j=1;
	} else{
		j-=1;
	}
	if( array[0] > end){
		return false;
	}
	return true;
}
function main() {
	'use strict';
	var array =[1,1],
		i = array[0],
		j = array[1];
	while(next(array,100)){
		console.log(array[0],j);
	}
	return;
}

console.log(main(process.argv[2]));