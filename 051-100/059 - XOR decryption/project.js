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
		i=0,
		arr,str;
	while(next(d,a,z)){
		arr = cipher_array();
		str = '';
		i=0;
		while(i < arr.length){
			if( ((d[i%3] ^  parseInt(arr[i],10)) >= a) && ((d[i%3] ^  parseInt(arr[i],10)) <= b)){
				count +=1;
			}
			str += String.fromCharCode( d[i%3] ^  parseInt(arr[i],10) );
			i+=1;
		}
		if(count/arr.length > .5){
			console.log(str);
		}
	}

	// /console.log(min, max);
	return;
}

console.log(main(process.argv[2]));