function generate_array(){
	var array = [];
	for (i=1000;i<10000;i+=1){
		array.push(i);
	}
	return array;
}
function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
}
function main() {
	'use strict';
	var array = generate_array(),
		i,a,b,fract;
	for (i=0;i<array.length;i+=1){
		a = parseInt(String(array[i]).substring(0,2),10);
		b = parseInt(String(array[i]).substring(2,4),10);
		if(a<b){
				fract = a/gcd(a,b) + "/" + b/gcd(a,b)
				console.log(fract);
		}
	}
	return;
}

console.log(main(process.argv[2]));