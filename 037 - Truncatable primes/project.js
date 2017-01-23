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
function list(str){
	var array = [],
		i = 0,
		head,tail;
	while(str.length > i){
		head = str.substring(i, str.length);
		tail = str.substring(str.length - i,str.length);
		if(array.indexOf(head) === -1){
			array.push(head);
		}
		if(array.indexOf(tail) === -1){
			array.push(tail);
		}
		i+=1;
	}
	return array;

}
function main() {
	'use strict';
	var i =list('test');
	return i;
}

console.log(main(process.argv[2]));