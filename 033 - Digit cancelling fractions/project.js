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
		i,j,a,b,c,d,str1,str2,_gcd,_num = 1,_dem = 1;
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
	for(i=0;i<result.length;i+=1){
		_num *= result[i][0];
		_dem *= result[i][1];
	}
	_gcd = gcd(_num,_dem);
	_num = _num/_gcd;
	_dem =	_dem/_gcd;
	return _num + '/' + _dem;
}

console.log(main(process.argv[2]));