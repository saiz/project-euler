function main() {
	'use strict';
	var i= 0, j, k,
		number,
		zeros,
		ones,
		n =1000;
	while(i <n){
		number = (i).toString(2);
		zeros = (number.split("0").length - 1);
		ones = (number.split("1").length - 1);
		number = number.replace(/1/g, 'a').replace(/0/g, 'b');
		for(j=0;j<10;j+=1){
			for(k=0;k<Math.pow(10,zeros);k+=1){
				console.log(number.replace(/a/g, k));
			}
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));