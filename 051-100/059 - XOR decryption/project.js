var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}
function dcrypt(a){

}

function main(n) {
	'use strict';
	var arr = cipher_array(),
		a = n.charCodeAt(0),
		b = n.charCodeAt(1),
		c = n.charCodeAt(2),
		d = [a,b,c],
		i=0;
	console.log(String.fromCharCode('a'),String.fromCharCode('z'));
	while(i<arr.length){

		arr[i] = String.fromCharCode(d[i%3]^arr[i]);
		i+=1;
	}
	// /console.log(min, max);
	return arr.join("");
}

console.log(main(process.argv[2]));