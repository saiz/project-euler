function palindromes(str){
	var i=0,
		bool = true;
	while((i<(str.length/2)) && bool){
		if(str[i] !== str[str.length - i - 1]){
			bool = false;
		}
		i+=1;
	}
	return bool;
}

function main(n) {
	'use strict';
	n= parseInt(n,10);
	var array = [],
		i;
	for(i=1;i<n;i+=2){
		if(palindromes(String(i)) && palindromes((i >>> 0).toString(2))){
			console.log(i,(i >>> 0).toString(2));
		}
	}
	return;
}

console.log(main(process.argv[2]));