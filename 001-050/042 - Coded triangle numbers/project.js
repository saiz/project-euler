var fs = require('fs');
function names_array(){
	'use strict';
	var arr = fs.readFileSync('./words.txt').toString().split(","),
	i;
	for(i=0;i<arr.length;i+=1){
	    arr[i] = arr[i].replace(/['"]+/g, '').toLowerCase();
	}
	return arr;

}
function t(n){
	return n/2*(n+1);
}
function charcode (str){
	return str.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) +1;
}
function stringscore(str){
	var i = 0,
		sum = 0;
	while(i <str.length){
		sum += charcode(str[i]);
		i+=1;
	}
	return sum;
}
function test_triangle(array,n){
	while(array[array.length -1] < n){
		array.push(t(array.length));
	}
	if(array.indexOf(n) >= 0){
		return true;
	}
	return false;
}
function main() {
	'use strict';
	var array = names_array(),
		triangle = [1],
		results = [],
		i = 0;
		while(i<array.length){
			if(test_triangle(triangle,stringscore(array[i]))){
				results.push(array[i]);
			}
			i+=1;
		}
	return results.length;
}

console.log(main(process.argv[2]));