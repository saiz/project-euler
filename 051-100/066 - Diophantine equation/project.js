function dio(d,i){
	return Math.sqrt(d*i*i +1);
}
function diophan (d){
	var i=1;
	while(dio(d,i)%1 !==0){
		i+=1;
	}
	return dio(d,i);
}
function main(n) {
	'use strict';
	n =parseInt(n,10);
	var i =1;
	while(i <=n){
		if(Math.sqrt(i*i)%1 !==0){
			console.log(dio(d,i),i);
		}
		i+=1;
	}
	return ;
}

console.log(main(process.argv[2]));