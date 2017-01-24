function d(n,i, str){
	if(n < str.length){
		return str[n];
	}
	str += String(i);
	i+=1;
	return d(n, i, str);
}
function main(n) {
	'use strict';
	n = parseInt(n) || 0;
	var str ='',
		i = 1, res;
		res = d(n,i,str);
		console.log(str);
	return res;
}

console.log(main(process.argv[2]));