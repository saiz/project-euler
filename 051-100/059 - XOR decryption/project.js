var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}

function main(n) {
	'use strict';
	var arr = cipher_array(),
		a = n.charCodeAt(0),
		b = n.charCodeAt(1),
		c = n.charCodeAt(2),
		d = parseInt(String(a) +String(b) +String(c),10),
		i=0;
	while(i<arr.length){

		i+=1;
	}
	// /console.log(min, max);
	return arr.join("");
}

console.log(main(process.argv[2]));