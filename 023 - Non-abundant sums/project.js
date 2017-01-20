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
function d(number) {
	'use strict';
	var i, prime_Array =[1];
	for (i=2; i < number; i+=1){
		if(isPrime3(i) && (number%i===0)){
			prime_Array.push(i);
		}
	}
	var result,j;
	i=0;
	while(i<prime_Array.length){
		j=0;
		while(j<prime_Array.length){
			result = prime_Array[i] * prime_Array[j];
			if(result >=number){
				break;
			}
			if((number%result === 0) && !prime_Array.includes(result)){
				insert(result,prime_Array);
			}
			j+=1;
		}
		i+=1;
	}
	return prime_Array;
}
function add(a, b) {
	'use strict';
    return a + b;
}
function main() {
	'use strict';
	var i, abundant= [], notabundant= [], result, arr=[], n=28123;
	for (i = 1; i <= n; i+=1) {
		notabundant.push(i);
	}
	for(i=2;i<n;i+=1){
		arr = d(i);
		result = arr.reduce(add, 0);
		if((result >i) && !arr.includes(i) ){
			insert(i,abundant);
		}
	}
	var j, index;
	for(i=0;i<abundant.length;i+=1){
		for(j=0;j<abundant.length;j+=1){
			result = abundant[i]+abundant[j];
			index = notabundant.indexOf(result);
			if (index > -1) {
			    notabundant.splice(index, 1);
			}
		}
	}
	return notabundant.reduce(add, 0);
}

console.log(main(process.argv[2]));