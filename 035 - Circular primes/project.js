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
function reverse(s) {
	var o = [];
	for (var i = 0, len = s.length; i <= len; i++)
		o.push(s.charAt(len - i));
	return o.join('');
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
function nextStr(ori,curr){
	curr = curr.substring(1) + curr[0];
	if(curr == ori){
		return false;
	}
	return true;
}
//1000000 - 1
function main(n) {
	'use strict';
	var array=[2];
	var i,j,
		end = n
		curr,ori,bool;
	for(i=3;i<end;i+=2){
		curr = String(i);
		bool = true;
		while(nextStr(String(i),curr) && bool){
			j = parseInt(curr,10);
			if(!isPrime3(j)){
				bool = false;
			}
		}
		curr = String(i);
		while(nextStr(String(i),curr) && bool){
			j = parseInt(curr,10);
			if(array.indexOf(i)=== -1){
				insert(j,array);
			}
		}
		if((isPrime3(i) && isPrime3(j)) && (array.indexOf(i)=== -1)){
			if(i!==j){
				insert(j,array);
			}
			insert(i,array);
		}
	}
	return array.length;
}

console.log(main(process.argv[2]));