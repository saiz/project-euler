function dio(d,i){
	return Math.sqrt(d*i*i +1);
}
function diophan (d){
	var i=1, max = 0;
	while(i < d){
		if(dio(d,i) > max){
			max = dio(d,i);
		}
		i+=1;
	}
	return max;
}
function main(n) {
	'use strict';
	n =parseInt(n,10);
	var i =1,
		x = 0,
		d = 0;
	while(i <=n){
		if(Math.sqrt(i)%1 !==0){
			if(x <= diophan(i)){
				x = diophan(i);
				d = i;
				console.log({
					x:x,
					d:d
				})
			}
		}
		if(i%100 === 0){
			console.log(i);
		}
		i+=1;
	}
	return {x:x,d:d};
}

console.log(main(process.argv[2]));