/*jslint white:true, for:true */
function factorial (n){
	'use strict';
	var i,result = 1;
	for(i=1;i<=n;i+=1){
		result *=i;
	}
	return result;
}
function main(n) {
	'use strict';
	return factorial(n*2)/(factorial(n)*factorial(n));
}

console.log(main(process.argv[2]));