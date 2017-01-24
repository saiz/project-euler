/*jslint white:true, for:true */
//a^2 + b^2 = c^2
//a + b + c = k
//b  = k - a - c
//b^2 = c^2 - a^2
//(k - a - c)^2 = c^2 - a^2
//a^2 + 2ac - 2ak + c^2 - 2ck + k^2 = c^2 - a^2
//2a^2 + 2ac - 2ak - 2ck + k^2 = 0
//2c(a - k) + 2a^2 - 2ak + k^2 = 0
//2c(a - k) = 2ak - 2a^2 - k^2
//c = (2ak - 2a^2 - k^2)/2(a - k)
function main(k) {
	'use strict';
	var a, b, c, bool = false;
	for(a=1;a<k;a+=1){
		for(b=1;b<k;b+=1){
			c = Math.sqrt(a*a + b*b);
			if((a + b + c === k) && (c % 1 === 0)){
				bool = true;
				break;
			}
		}
		if(bool){
			break;
		}
	}
	if(!bool){
		console.log(-1);
		return;
	}
	console.log(a*b*c);
}
main(1000);