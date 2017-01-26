function main() {
	'use strict';
	var i= 0,
		n =1000;
	while(i <n){
		console.log((i).toString(2));
	}
	return i;
}

console.log(main(process.argv[2]));