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
		key = [],
		i=0,
		temp,
		arr,str, count, max = 0;
	while(next(d,a,z)){
		arr = cipher_array();
		str = '';
		i=0;
		count = 0;
		while(i < arr.length){
			temp =  d[i%3] ^  parseInt(arr[i],10);
			str += String.fromCharCode(temp);
			i+=1;
			var string = "sample1";
			var re = new RegExp("^([a-z0-9]{5,})$");
			if (re.test(string)) {
			    console.log("Valid");
			} else {
			    console.log("Invalid");
			}
			if(temp )
				/^[a-z\d\-_\s]+$/i
		}
		if(count > max){
			max = count;
			key = d;
		}
	}
	str = '';
	i=0;
	arr = cipher_array();
	key = [103, 111, 100];
	console.log()
	while(i < arr.length){
		str += String.fromCharCode( key[i%3] ^  parseInt(arr[i],10) );
		i+=1;
	}
	console.log(str);



	// /console.log(min, max);
	return;
}

console.log(main(process.argv[2]));