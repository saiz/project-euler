var fs = require('fs');
function cipher_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}
function main() {
	'use strict';
	var i =cipher_array(0);
	return i;
}

console.log(main(process.argv[2]));