function nextPerm(array){
	'use strict';
	var i = array.length -1;
	while(i>0 && (array[i-1] >= array[i])){
		i-=1;
	}
	if(i<=0){
		return false;
	}
	var j = array.length -1;
	while(array[j] <= array[i-1]){
		j-=1;
	}
	var temp = array[i-1];
	array[i-1] = array[j];
	array[j] = temp;
	j = array.length - 1;
	while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i+=1;
        j-=1;
    }
    return true;
}
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
	if(obj[i].number > j){
		obj[i].number = j;
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
			res = str;
			bool = false;
		}
		//console.log(str, cubes[str]);
		i+=1;
	}
	console.log(res);
	return res;
}

console.log(main(process.argv[2]));