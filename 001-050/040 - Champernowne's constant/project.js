function d(n,i, str){
	if(n < str.length){
		return str[n];
	}
	str += i;
	i+=1;
	return d(n, i, str);
}
function main(n) {
	v
	n = parseInt(n) || 0;
	var str ='',
		i = 1;
	return d(n,i,str);
}

console.log(main(process.argv[2]));