function dio(d,i){
	return Math.sqrt(d*i*i +1);
}
function Diophan (d){
	i=1;
	while(dio(d,i)%0==1){
		i+=1;
	}
	return i;
}
function main() {
	'use strict';
	var i =Diophan(3)
	return i;
}

console.log(main(process.argv[2]));