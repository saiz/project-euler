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
		i=0, max = 0, min = 0;
	while(i<arr.length){
		if(arr[i] ^ d > max){
			max = arr.slice(i,1);
		}
		if(arr[i] ^ d < min){
			min = arr.slice(i,1);
		}
		arr[i] = String.fromCharCode(arr[i] ^ d);
		i+=1;
	}
	console.log(min, max);
	return arr.join("");
}

console.log(main(process.argv[2]));