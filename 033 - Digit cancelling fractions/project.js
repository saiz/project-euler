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
		i,j,a,b,c,d,fract,str1,str2,bool;
	for (i=0;i<array.length;i+=1){
		bool = false;
		str1 = String(array[i]).substring(0,2)
		str2 = String(array[i]).substring(0,2)
		a = parseInt(str1.slice(0)),10);
		b = parseInt(str2.slice(0)),10);
		c = a/gcd(a,b);
		d =	b/gcd(a,b);
		for(j=0;j<str1.length;j+=1){
			if(str2.indexOf(str[j]) >= 0){
				bool = true;
			}
		}
		if(bool){
			str1
		}
		if(a<b){
			console.log(c+"/" +d);
		}
	}
	return;
}

console.log(main(process.argv[2]));