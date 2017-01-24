function sumstring(n,m){
	var str = '',
	i=1;
	while(str.length < m){
		str +=String(n*i);
		i+=1;
	}
	return parseInt(str,10);
}
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
function main(n) {
	'use strict';
	var i =1,
		num;
	while(String(i).length<=Math.floor(n/2)){
		num = sumstring(i,n);
		if(pandigital(num) &&( String(num).length === n)){
			console.log(num);
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));