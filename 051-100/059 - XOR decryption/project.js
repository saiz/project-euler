var fs = require('fs');
function names_array(){
	'use strict';
	var arr = fs.readFileSync('./cipher.txt').toString().split(","),
	i;
	return arr;

}
function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));