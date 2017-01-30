var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}

function main(n) {
	'use strict';
	String.fromCharCode(parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10));
	n = parseInt(n,10);
	var arr =cipher_array(0),
		i=0;
	while(i<arr.length){
		arr[i] = String.fromCharCode(arr[i] ^ n);
		i+=1;
	}
	return arr.join("");
}

console.log(main(process.argv[2]));