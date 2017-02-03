function calc_x(d,y) {
	return Math.sqrt(1+d*y*y);
}
function calc_y(d,x) {
	return Math.sqrt((x*x-1)/d);
}
function diophantine(d){
	var x = 2;
	while(calc_y(d,x)%1!==0){
		x+=1;
	}
	return {x:x,d:d,y:calc_y(d,x)};
}
function check(d,x,y){
	return d*y*y < x*x;
}

function main(n) {
	'use strict';
	n =parseInt(n,10);
	var d =1,
		i,
		res,
		max = {x:0,d:0,y:0};
	while(d <=n){
		if( Math.sqrt(d)%1!==0){
res =
		}
		d+=1;
	}
	console.log('--');
	return max; //{x:x,d:d};
}

console.log(main(process.argv[2]));