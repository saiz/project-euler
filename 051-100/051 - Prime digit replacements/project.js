function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}
function main() {
	'use strict';
	var i= 0, j, k, _k,
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

				console.log(number.replace(/a/g, j)," | ", zeroPad(k,Math.pow(10,zeros-1)));

			}
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));