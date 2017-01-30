var fs = require('fs');
function Encrypt(message, hash) {
    int[] encryptedMessage = new int[message.Length];

    for (i = 0; i < message.Length; i++) {
        encryptedMessage[i] = message[i] ^ key[i%key.Length];
    }
    return encryptedMessage;
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