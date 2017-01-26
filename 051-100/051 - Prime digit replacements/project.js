function main() {
	'use strict';
	var i= 0,
		n =1000;
	while(i <n){
		console.log((i).toString(2));
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));