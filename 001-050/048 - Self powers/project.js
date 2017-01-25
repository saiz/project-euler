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
	n = parseInt(n,10);
	var i = 1,
		j,
		num,
		result = [];
		while( i < n){
			j= 0;
			num = binary().reverse();
			while(j<num.length){
				if(result[j] === undefined){
					result[j] = 0;
				}
				result[j] += num[j];
				j+=1;
			}
			i+=1;
		}
		return result;
	}

console.log(main(process.argv[2]));