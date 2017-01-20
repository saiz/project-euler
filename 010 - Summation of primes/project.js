/*jslint white:true, for:true */
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
function main(number) {
	'use strict';
	var i, total =0;
	for (i=2; i <= number; i+=1){
		if(isPrime3(i)){
			total +=i;
		}
	}
	console.log(total);
}
main(2000000);