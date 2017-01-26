function main() {
	'use strict';
	var i= 0, j,
		number,
		zeros,
		n =1000;
	while(i <n){
		number = (i).toString(2);
		for(j=0;j<10;j+=1){
			console.log(number.replace(/1/g, j));
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));