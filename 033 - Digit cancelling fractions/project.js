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
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function mod(a,b){
	'use strict';
	var bool = false;
	if((a%10 ===0) && b%10 ===0){
		bool = true;
	}
	return bool;
}
function main() {
	'use strict';
	var array = generate_array(),
		result = [],
		i,j,a,b,c,d,str1,str2,_gcd,_lcm;
	for (i=0;i<array.length;i+=1){
		str1 = String(array[i]).substring(0,2);
		str2 = String(array[i]).substring(2,4);
		a = parseInt(str1,10);
		b = parseInt(str2,10);
		if(a<b && !mod(a,b)){
			for(j=0;j<str1.length;j+=1){
				if(str2.indexOf(str1[j]) >= 0){
					c = parseInt(str1.replace(str1[j], ""),10);
					d = parseInt(str2.replace(str1[j], ""),10);
					_gcd = gcd(c,d);
					c = c/_gcd;
					d =	d/_gcd;
					if(a/b === c/d){
						result.push([c,d]);
					}
				}
			}
		}
	}
	_lcm = lcm(results[0],results[1]);
	for(i=2;i<result.length-1;i+=1){
		_lcm = lcm(results[i],_lcm);
	}
	return result;
}

console.log(main(process.argv[2]));