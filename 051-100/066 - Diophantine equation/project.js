function dio(d,x){
	return Math.sqrt((x*x - 1)/d);
}
function check(d,x){
	return d*d*d < x*x ;
}
function diophan (d){
	var i=2, max = 0;
	while(dio(d,i)%1!==0 && check(d,i)){
		i+=1;
	}
	return {x:i,d:d,y:dio(d,i)};
}
function main(n) {
	'use strict';
	n =parseInt(n,10);
	var d =1,
		res,
		max = {x:0,d:0,y:0};
	while(d <=n){
		if( Math.sqrt(d)%1!==0){
			res = diophan(d);
			//console.log(res);
			if(res.x > max.x){
				max = res;
				console.log(diophan(d));
			}
		}
		if(d%100 === 0){
			console.log(d);
		}
		d+=1;
	}
	console.log('--');
	return max; //{x:x,d:d};
}

console.log(main(process.argv[2]));