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
function main() {
	'use strict';
	return binary(3);
}

console.log(main(process.argv[2]));