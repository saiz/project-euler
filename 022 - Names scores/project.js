/*jslint white:true, for:true */
var fs = require('fs');
function names_array(){
	'use strict';
	var arr = fs.readFileSync('./names.txt').toString().split(","),
	i;
	for(i=0;i<arr.length;i+=1){
	    arr[i] = arr[i].replace(/['"]+/g, '').toLowerCase();
	}
	return arr;

}
function range(start,stop) {
	'use strict';
	var result=[],idx, end=stop.charCodeAt(0);
	for (idx=start.charCodeAt(0); idx <=end; idx+=1){
		result[String.fromCharCode(idx)] = idx-start.charCodeAt(0)+1;
	}
	return result;
}
function score(str){
	'use strict';
	var key = range('a','z'),
	total=0,
	i;
	for(i=0;i<str.length;i+=1){
		total+=key[str[i]];
	}
	return total;
}
function main() {
	'use strict';
	var array = names_array().sort(function(a, b){
    	if(a < b) {
    		return -1;
    	}
    	return 1;
	});
	var i, total =0;
	for(i=0;i<array.length;i+=1){
		total +=score(array[i])*(i+1);
	}
	return total;
}

console.log(main(process.argv[2]));