var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}
function next(array, start, end){
	if(array[2] + 1 > end){
		array[2] = start;
		array[1] +=1;
	} else{
		array[2] +=1;
	}
	if(array[1] > end){
		array[1] = start;
		array[0] +=1;
	}
	if( array[0] > end){
		return false;
	}
	return true;
}

function main(n) {
	'use strict';
	var a = 'a'.charCodeAt(0),
		z = 'z'.charCodeAt(0),
		d = [a,a,a],
		key = [],
		i=0,
		temp,
		arr,str, count, max = 0;
	while(next(d,a,z)){
		arr = cipher_array();
		str = '';
		i=0;
		while(i < arr.length){
			temp =  d[i%3] ^  parseInt(arr[i],10);
			str += String.fromCharCode(temp);
			i+=1;
		}
		if(str.toLowerCase().split("the").length > max){
			max = str.toLowerCase().split("the").length;
			key = d.slice(0);
		}
	}
	str = '';
	i=0;
	arr = cipher_array();
	count = 0;
	while(i < arr.length){
		temp =  key[i%3] ^  parseInt(arr[i],10);
		str += String.fromCharCode(temp);
		count += (key[i%3] ^  parseInt(arr[i],10));
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));