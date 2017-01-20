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
		a = parseInt(String(array[i]).substring(0,2),10);
		b = parseInt(String(array[i]).substring(2,4),10);
		if(a<b){
			console.log(a,b);
		}
	}
	return;
}

console.log(main(process.argv[2]));