function generate_array(){
	var array = [];
	for (i=1000;i<10000;i+=1){
		array.push(i);
	}
	return array;
}

function main() {
	'use strict';
	var array = generate_array(),
		i;
	for (i=0;i<array.length;i+=1){
		console.log(i);
	}
	return i;
}

console.log(main(process.argv[2]));