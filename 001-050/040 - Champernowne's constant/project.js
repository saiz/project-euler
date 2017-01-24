function d(n,i, str){
	if(n < str.length){
		return str[n];
	}
	str += String(i);
	i+=1;
	console.log(str);
	return d(n, i, str);
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var str ='',
		i = 1;
		d(n,i,str);
		console.log(str);
	return str[n];
}

console.log(main(process.argv[2]));