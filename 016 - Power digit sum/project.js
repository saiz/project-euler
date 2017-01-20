/*jslint white:true, for:true */
function binary(power) {
	'use strict';
	var digits = [], i;
    digits[0] = 1;
    while (power > 0) {
        for (i = digits.length-1; i >= 0; i-=1) {
            digits[i] *= 2;
            if (digits[i] > 9) {
                digits[i] -= 10;
                digits[i+1] = digits[i+1] || 0;
                digits[i+1] += 1;
            }
        }
        power-=1;
    }
    return digits;
}
function main(n) {
	'use strict';
	var total = 0,i, array = binary(n).reverse();
	//console.log(array);
	for(i=0;i<array.length;i+=1){
		total +=array[i];
	}
	return total;
}
console.log(main(process.argv[2]));


// if(total.length-tens > 0){
// 	total_t = total.substring(0,total.length-tens);
// }
// console.log('total_t: ',total_t);
// i=0;
// while(total[total.length-i] !== undefined){
// 	total = total.slice(total.length-i);
// 	total = String(parseInt(temp) * parseInt(total_t))+ total;
// 	i+=1;
// }