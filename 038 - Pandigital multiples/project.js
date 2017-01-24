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
		if(!str.contains(i)){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function main() {
	'use strict';
	var i =1,
		str;
	while(String(i).length<4){
		str = sumstring(i,9);
		if(pandigital(str) && str.length === 9){
			console.log(str);
		}
	}
	return i;
}

console.log(main(process.argv[2]));