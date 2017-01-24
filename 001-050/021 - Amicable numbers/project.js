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
	var sum = 0;
	for(i=0;i<prime_Array.length;i+=1){
		sum+=prime_Array[i];
	}
	return sum;
}
function amicable(number) {
	'use strict';
	var ama,mam;
	ama = d(number); //i ==d(n)
	mam = d(ama);
	if(number === mam && number!==ama){
		return true;
	}
	return false;
}
function main(n) {
	'use strict';
	var i, array=[];
	for(i=1;i<n;i+=1){
		if(amicable(i) && !(array.includes(i)||array.includes(d(i)) )){
			insert(i,array);
			insert(d(i),array);
		}
	}
	var sum = 0;
	for(i=0;i<array.length;i+=1){
		sum+=array[i];
	}
	return sum;
}
console.log(main(process.argv[2]));