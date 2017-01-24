/*jslint white:true, for:true */
function ones(n) {
	'use strict';
	switch (n)
    {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        //tens
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        default: return '';
    }
}
function tens(n) {
	'use strict';
	switch (n)
    {
        //20 - 90
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default: return '';
    }
}
function hundreds(n) {
	'use strict';
	if(n===0){
		return '';
	}
	return ones(n) + 'hundred';
}
function thousands(n) {
	'use strict';
	if(n===0){
		return '';
	}
	return ones(n) + 'thousand';
}
function seperate_num(n){
	'use strict';
	var array = String(n).split('').map(Number),num = parseInt(String(array[array.length-2]) + String(array[array.length-1]),10);
	if((num < 20) && (num >=10)){
		var length = array.length;
		array.splice(-2);
		if(length >2){
			array.push(0);
		}
		array.push(num);
	} else if((num < 10) && (num >0)){
		array.splice(-1);
		array.push(num);

	}
	return array;
}

function main(n) {
	'use strict';
	var i, temp,result, temp2, total = 0;
	for(i=n;i>0;i-=1){
		temp = seperate_num(i);
		result = '';
		if(temp.length === 4){
			result = thousands(temp[0]) + hundreds(temp[1]) + tens(temp[2]) + ones(temp[3]);
		} else if(temp.length === 3){
			temp2=tens(temp[1]) + ones(temp[2]);
			if(temp2.length === 0){
				result = hundreds(temp[0]);
			} else{
				result = hundreds(temp[0]) + 'and'+ tens(temp[1]) + ones(temp[2]);
			}
		} else if(temp.length === 2){
			result = tens(temp[0]) + ones(temp[1]);
		} else if(temp.length === 1){
			result = ones(temp[0]);
		}
		total += result.length;

	}
	return(total);
}

console.log(main(process.argv[2]));