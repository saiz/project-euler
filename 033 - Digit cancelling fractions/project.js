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
function mod(a,b){
	var bool1 = false;
	var bool2 = false;
}
function main() {
	'use strict';
	var array = generate_array(),
		i,j,a,b,c,d,fract,str1,str2,e,f;
	for (i=0;i<array.length;i+=1){
		str1 = String(array[i]).substring(0,2);
		str2 = String(array[i]).substring(2,4);
		a = parseInt(str1,10);
		b = parseInt(str2,10);
		c = a/gcd(a,b);
		d =	b/gcd(a,b);
		if(a<b){
			for(j=0;j<str1.length;j+=1){
				if(str2.indexOf(str1[j]) >= 0){
					e = parseInt(str1.replace(str1[j], ""),10);
					f = parseInt(str2.replace(str1[j], ""),10);
					if((c/d === e/f) && (gcd(a,b) !== 10)){
						console.log("hit",a,b,e,f);
					}
				}
			}
		}
	}
	return;
}

console.log(main(process.argv[2]));