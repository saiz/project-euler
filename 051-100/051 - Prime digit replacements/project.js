function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}
function isPrime3(n) {
	'use strict';
	if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
	if (n%2===0) {return (n===2);}
	if (n%3===0) {return (n===3);}
	var m=Math.sqrt(n), i;
	for (i=5;i<=m;i+=6) {
		if (n%i===0)     {return false;}
		if (n%(i+2)===0) {return false;}
	}
	return true;
}
function main() {
	'use strict';
	var i= 0, j, k,l,
		number,
		number_temp,
		zeros,
		ones,
		temp,
		array = [],
		bool = true;
	while(bool){
		number = (i).toString(2);
		zeros = (number.split("0").length - 1);
		ones = (number.split("1").length - 1);
		number = number.replace(/1/g, 'a').replace(/0/g, 'b');
		for(k=0;k<Math.pow(10,zeros);k+=1){
			array = [];
			temp = String(zeroPad(k,zeros));
			l=0;
			while(l < temp.length ){
				number_temp = number_temp.replace('b',temp[l]);
				for(j=0;j<10;j+=1){
					number_temp = number.replace(/a/g, j);
					if(isPrime3(parseInt(number_temp,10))){
						array.push(number_temp);
					}
				}
				l+=1;
			}
			if(array.length === 8){
				console.log(array);
				console.log(number);
			}
		}
		i+=1;
	}

	return ;
}

console.log(main(process.argv[2]));