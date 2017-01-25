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
	var i = 1;
		result = [];
		while( i < n){
			console.log(binary(i))
			i+=1;
		}
		return;
	}

console.log(main(process.argv[2]));