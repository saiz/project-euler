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
function plus(obj,i){
	if(obj[i]===undefined){
		obj[i] = 1;
	} else{
		obj[i] +=1;
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
		plus(cubes,str);
		if(cubes[str] === len){
			res = j;
			bool = false;
		}
		console.log(str, cubes[str]);
		i+=1;
	}
	var arr = res.split(""), num;
	i= 0;
	while(i <arr.length){
		arr[i] = parseInt(arr[i],10);
	}
	bool = true;
	while(bool){
		if(!nextPerm(arr)){
			bool = false;
		}
		num =parseInt(arr.join(''));
if(Math)
	}
	return res;
}

console.log(main(process.argv[2]));