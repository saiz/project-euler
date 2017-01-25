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
function next_prim(array){
	var i = array[array.length -1];
	while(!isPrime3(i)){
		i+=2;
	}
	return i;
}
function check_prime(n,array,sum){
	while(n >array.length){
		array.push(next_prim(array));
		sum.push(array[array.length-1] + array[array.length-2]);
	}
	return array[n -1];
}
function main() {
	'use strict';
	var prime =[2,3],
		sum = [2,5];
check_prime()
console.log(prime);
console.log(sum);

	return;
}

console.log(main(process.argv[2]));