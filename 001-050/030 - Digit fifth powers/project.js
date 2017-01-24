var args = process.argv.slice(2);
function sum_of_pow_n(m, n) {
	'use strict';
	var str = String(m).split(""),
	i, total =0;
	for(i=0;i<str.length;i+=1){
		total += Math.pow(parseInt(str[i],10),n);
	}
	return total;

}
function digit_pow_array(n){
	'use strict';
	var array = [],
	end  = Math.pow(10,n+2),
	i;
	for(i=2;i<end;i+=1){
		if(sum_of_pow_n(i,n)===i){
			array.push(i);
		}
	}
	return array;
}
function main(n){
	'use strict';
	n = parseInt(n,10) || 0;
	var array = digit_pow_array(n);
	var sum = array.reduce(function(a,b){
		return a+b;
	});
	console.log(array);
	return sum;
}
console.log(main(args[0]));