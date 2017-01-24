function pandigital(n){
	var str = String(n),
		i = 1,
		bool = true;
	while(i<=str.length && bool){
		if(!str.includes(String(i))){
			bool = false;
		}
		i+=1;
	}
	return bool;
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
function create_pandigital(n) {
	var str ='';
	while(n > 0){
		str += String(n);
		n-=1;
	}
	return parseInt(str,10);
}
function main(n) {
	'use strict';
	n = parseInt(n,10) || 0;
	var i = create_pandigital(n),.
	bool = true;
	while(i > 0 && bool){
		console.log(i);
		if(isPrime3(i) && pandigital(i)){
			bool = false;
		}
		i-=2;
	}
	return i;
}

console.log(main(process.argv[2]));