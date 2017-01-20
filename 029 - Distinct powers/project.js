var BigNumber = require('big-number');
function locationOf(element, array, start, end) {
	'use strict';
	start = start || 0;
	end = end || array.length;
	var pivot = parseInt(start + (end - start) / 2, 10);
	if (end-start <= 1 || array[pivot] === element){
		return pivot;
	}
	if (array[pivot] < element) {
		return locationOf(element, array, pivot, end);
	} else {
		return locationOf(element, array, start, pivot);
	}
}
function insert(element, array) {
	'use strict';
  array.splice(locationOf(element, array) + 1, 0, element);
  return array;
}
function array_of_powers(a,b) {
	'use strict';
	var array = [],
	power,i,j;
	for(i=a;i<=b;i+=1){
		for(j=a;j<=b;j+=1){
			power = new BigNumber(i).power(j);
			console.log(power);
			//power = Math.pow(i,j);
			if(array.indexOf(power.number.join("")) === -1){
				insert(power.number.reverse().join(""),array);
			}
		}
	}
	return array;
}

function main(n,m) {
	'use strict';
	m = parseInt(m,10);
	n = parseInt(n,10);
	var array = array_of_powers(n,m);
	console.log(array);
	return array.length;
}

console.log(main(process.argv[2],process.argv[3]));