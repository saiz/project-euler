function dio(d,i){
	return Math.sqrt(d*i*i +1);
}
function diophan (d){
	i=1;
	while(dio(d,i)%0==1){
		i+=1;
	}
	return i+1;
}
function main(n) {
	'use strict';
	n =parseInt(n,10)
	console.log(3,diophan(3));
	return ;
}

console.log(main(process.argv[2]));