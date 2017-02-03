function dio(d,i){
	return Math.sqrt((i*i -1)/d);
}
function diophan (d){
	var i=2, max = 0;
	while(dio(d,i)%1!==0){
		i+=1;
	}
	return {x:i,d:d,y:dio(d,i)};
}
function main(n) {
	'use strict';
	n =parseInt(n,10);
	var i =1,
		x = 0,
		d = 0,
		res,
		max;
	while(i <=n){
		if( Math.sqrt(res.d)%1!==0){

		} && res.x > x){
			max = res;
			//console.log(diophan(i));
		}
		i+=1;
	}
	return max; //{x:x,d:d};
}

console.log(main(process.argv[2]));