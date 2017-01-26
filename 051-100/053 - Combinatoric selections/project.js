function fact(n){
	if(n <2){
		return 1;
	}
	return n * fact(n-1);
}
function comb(n,r){
	return fact(n)/(fact(r)*fact(n - r));
}
function next(array){
	var i = array[0],
		j = array[1];
	if(j -1 === 0){
		i+=1;
		j=1;
	} else{
		j-=1;
	}
}
function main() {
	'use strict';
	var ar
	return i;
}

console.log(main(process.argv[2]));