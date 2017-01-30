var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}

function main(n) {
	'use strict';
	var a = n.charCodeAt(0),
		b = n.charCodeAt(1),
		c = n.charCodeAt(2),
		d = parseInt(String(a) +String(b) +String(c),10),
		arr = cipher_array(0),
		i=0;
	while(i<arr.length){
		arr[i] = String.fromCharCode(arr[i] ^ d);
		i+=1;
	}
	return arr.join("");
}

console.log(main(process.argv[2]));