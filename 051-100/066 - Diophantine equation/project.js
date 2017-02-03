function dio(d,i){
	return Math.sqrt(d*i*i +1);
}
function diophan (d){
	var i=1;
	while(dio(d,i)%0===1){
		console.log(dio(d,i))
		i+=1;
	}
	return i+1;
}
function main(n) {
	'use strict';
	n =parseInt(n,10);
	console.log(n,diophan(n));
	return ;
}

console.log(main(process.argv[2]));