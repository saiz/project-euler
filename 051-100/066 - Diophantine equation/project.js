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
	var i =1,
		x = 0,
		d = 0;
	while(i <=n){
		if(Math.sqrt(i)%1 !==0){
			if(x < diophan(i)){
				x = diophan(i);
				d = i;
			}
		}
		i+=1;
	}
	return {x:x,d:d};
}

console.log(main(process.argv[2]));