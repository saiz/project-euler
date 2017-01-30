var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}

function main() {
	'use strict';
	var arr =cipher_array(0),
		i=0;
	while(i<arr.length){
		console.log(arr[i] || 01);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));