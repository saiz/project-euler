var fs = require('fs');
function decrypt(hash) {
    var result = '';
    for (var i=0; i<hash.length; i++) {
        result += String.fromCharCode( this.salt ^ hash.charCodeAt(i) );
    }
    return result;
}
function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var temp = obj.constructor(); // give temp the original obj's constructor
    for (var key in obj) {
        temp[key] = cloneObject(obj[key]);
    }

    return temp;
}
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
		arr[i] = decrypt()
		i+=1;
	}
	console.log(min, max);
	return arr.join("");
}

console.log(main(process.argv[2]));