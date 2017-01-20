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
		i,a,b;
	for (i=0;i<array.length;i+=1){
		a = String(array[i]).substring(0,1);
		b = String(array[i]).substring(2,3);
		console.log(a,b);
	}
	return;
}

console.log(main(process.argv[2]));