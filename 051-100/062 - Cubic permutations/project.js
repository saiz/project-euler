function sortAlphabets(text) {
    return text.split('').sort().join('');
}
function plus(obj,i,j){
	if(obj[i]===undefined){
		obj[i]={
			len:1,
			num:Math.pow(2,52)
		};
	} else{
		obj[i].len +=1;
	}
	if(obj[i].num > j){
		obj[i].num = j;
	}
}
function main() {
	'use strict';
	var i = 1,
		len =5,
		index = [],
		cubes = {},
		bool =true,
		j,res,str;
	while(bool){
		j=i*i*i;
		str = sortAlphabets(String(j));
		plus(cubes,str,j);
		if(cubes[str].len === len){
			res = cubes[str];
			bool = false;
		}
		i+=1;
	}
	//console.log(res);
	return res.num;
}

console.log(main(process.argv[2]));