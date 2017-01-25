function isPrime3(n) {
	'use strict';
	if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
	if (n%2===0) {return (n===2);}
	if (n%3===0) {return (n===3);}
	var m=Math.sqrt(n), i;
	for (i=5;i<=m;i+=6) {
		if (n%i===0)     {return false;}
		if (n%(i+2)===0) {return false;}
	}
	return true;
}
function nextprime(n,i){
	var m=Math.sqrt(n);
	for (i;i<=m;i+=6) {
		if (n%i===0)     {return false;}
		if (n%(i+2)===0) {return false;}
	}
}
function goldbach(array,n){
	if(n > array[array.length -1]){
		while
	}
}
function main() {
	'use strict';
	var i =0,
		bool= true;
		prime = [2];
	while(bool){


		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));