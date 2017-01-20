function isPrime3(n) {
	'use strict';
	if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
	if (n%2===0) {return (n===2);}
	if (n%3===0) {return (n===3);}
	var m=Math.sqrt(n), i;
	for (i=5;i<=m;i+=6) {
		if (n%i===0)     {return false;}
		if (n%(i+2)===0) {return false;}
	}
	return true;
}
function quad(n,a,b){
	'use strict';
	b = b || 1;
	a = a || 1;
	return Math.pow(n,2) + a*n + b;
}
function test_quad(a,b){
	'use strict';
	var i=0;
	//testing 0 -> b, if i is not prime return false;
	while(isPrime3(Math.abs(quad(i,a,b)))){
		i+=1;
	}
	return i;
}
function array_test(n){
	'use strict';
	var a,b,
		max = {
			a:0,
			b:0,
			comb:0,
			product:0
		};
	//testing a and b combinations
	for(a=-1*n;a<n;a+=1){
		for(b=-1*n;b<=n;b+=1){
			if(test_quad(a,b) >= max.comb){
				max.a = a;
				max.b = b;
				max.comb = test_quad(a,b);
				max.product = a*b;
			}
		}
	}
	return max.product;

}
function main(n) {
	'use strict';
	return array_test(n);
}

console.log(main(process.argv[2]));