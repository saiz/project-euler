function main() {
	'use strict';
	var i= 0,
		number,
		n =1000;
	while(i <n){
		number = (i).toString(2);
		console.log(number);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));