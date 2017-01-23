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
function reverse(s) {
	var o = [];
	for (var i = 0, len = s.length; i <= len; i++)
		o.push(s.charAt(len - i));
	return o.join('');
}
//1000000 - 1
function main() {
	'use strict';
	var array=[2];
	var i,j,
		end = 1000000;
	for(i=3;i<end;i+=2){
		j =parseInt(reverse(String(i)),10);
		if(isPrime3(i) &&isPrime3(j)){

		}
	}
	return ;
}

console.log(main(process.argv[2]));