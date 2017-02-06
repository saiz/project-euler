
function main(n) {
	'use strict';
	n =parseInt(n,10);
	var d =1,
		i,
		res,
		max = {x:0,d:0,y:0};
	while(d <=n){
		if( Math.sqrt(d)%1!==0){
			console.log(res);
		}
		d+=1;
	}
	console.log('--');
	return max; //{x:x,d:d};
}

console.log(main(process.argv[2]));