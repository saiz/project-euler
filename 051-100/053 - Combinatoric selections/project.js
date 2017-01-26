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
	if(array[1] -1 === 0){
		array[0]+=1;
		array[1]=1;
	} else{
		array[1]-=1;
	}
	if( array[0] === end +1){
		return false;
	}
	return true;
}
function main() {
	'use strict';
	var array =[1,1],
		i = array[0],
		j = array[1];
	while(next(array)){
		console.log(i,j);
	}
	return;
}

console.log(main(process.argv[2]));