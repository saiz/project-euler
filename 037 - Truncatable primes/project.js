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
function trunc_prime(str){
	var array = [],
		i = 0,
		head,tail;
	while(str.length > i){
		head = str.substring(0,str.length - i);
		tail = str.substring(i, str.length);
		if((array.indexOf(head) === -1) && head !== ""){
			insert(parseInt(head,10), array);
		}
		if((array.indexOf(tail) === -1) && tail !== ""){
			insert(parseInt(tail,10), array);
		}
		i+=1;
	}
	return array;

}
function test_prim(n,array){
	if(array.indexOf(n) >= 0){
		return true;
	}
	if(n < array[array.length -1]){
		return false;
	}
	var i;
	for(i = array[array.length -1] + 1;i<=n;i+=1){
		if(isPrime3(i)){
			array.push(i);
		}
	}
	if(array.indexOf(n) >= 0){
		return true;
	}
	return false;
}
function add(a,b){
	return a+b;
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var prime_array = [2],
		results = [],
		temp, j, bool,
		i= 11;
		while(results.length < n){
			temp = trunc_prime(String(i));
			bool = true;
			for(j =0;j< temp.length;j+=1){
				if(!test_prim(temp[j],prime_array)){
					bool = false;
					j = temp.length;
				}
			}
			if(bool){
				results.push(i);
				console.log(results);
			}
			i+=1;
		}
	return results.reduce(add, 0);
}

console.log(main(process.argv[2]));