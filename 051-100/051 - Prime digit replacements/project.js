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
	var i= 0, j, k,
		number,
		number_temp,
		number_temp2,
		zeros,
		temp,
		array = [],
		bool = true;
	while(bool){
		number = (i).toString(2);
		zeros = (number.split("0").length - 1);
		number = number.replace(/1/g, 'a').replace(/0/g, 'b');
		for(j=0;j<Math.pow(10,zeros);j+=1){
			array = [];
			temp = String(zeroPad(j,zeros));
			k=0;
			number_temp = number;
			while(k < temp.length){
				number_temp = number_temp.replace('b',temp[k]);
				k+=1;
			}
			k=0;
			while(k < 10){
				number_temp2 = number_temp.replace(/a/g, k);
				console.log(number_temp2, " | ", number," | " , k);
				if(isPrime3(parseInt(number_temp2,10))){
					array.push(number_temp2);
				}
				k+=1;
			}
		}
		i+=1;
	}

	return ;
}

console.log(main(process.argv[2]));