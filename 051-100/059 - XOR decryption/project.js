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
	var a = 97,
		z = 123,
		d = [a,a,a],
		i=0,
		arr,str, count;
	// while(next(d,a,z)){
	// 	arr = cipher_array();
	// 	str = '';
	// 	i=0;
	// 	count = 0;
	// 	while(i < arr.length){
	// 		if( ((d[i%3] ^  parseInt(arr[i],10)) >= a) && ((d[i%3] ^  parseInt(arr[i],10)) <= z)){
	// 			count +=1;
	// 		}
	// 		str += String.fromCharCode( d[i%3] ^  parseInt(arr[i],10) );
	// 		i+=1;
	// 	}
	// 	if(count/arr.length > .72){
	// 		console.log(str);
	// 		console.log(d)
	// 	}
	// }
		arr = cipher_array();
		d= [103, 111, 100];
		str = '';
		count = 0;
		i=0;
		while(i < arr.length){
			if( ((d[i%3] ^  parseInt(arr[i],10)) >= a) && ((d[i%3] ^  parseInt(arr[i],10)) <= z)){
				count +=(d[i%3] ^  parseInt(arr[i],10));
			}
			str += String.fromCharCode( d[i%3] ^  parseInt(arr[i],10) );
			i+=1;
		}
		console.log(str);
		console.log(count);



	// /console.log(min, max);
	return;
}

console.log(main(process.argv[2]));