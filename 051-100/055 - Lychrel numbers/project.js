function palindromes(str){
	var i=0,
		bool = true;
		str = String(str);
	while((i<(str.length/2)) && bool){
		if(str[i] !== str[str.length - i - 1]){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  return o.join('');
}
function next(arr,end){
	if(arr[0]=== end){
		return false;
	}
	arr[0] +=1;
	return true;
}
function rev(i) {
	return parseInt(reverse(String(i)),10);
}
function add_rev(i){
	return i +rev(i);
}
function test(num,i,end){
	if(i > end || ( palindromes(num) && i !== 0)){
		return num;
	}
	return test(add_rev(num),i+1,end);
}

function main() {
	'use strict';
	var _i =[0],i, count = 0;
	while(next(_i,Math.pow(10,4))){
		console.log(i)
		i = _i[0];
		if(!palindromes(test(i,0,50))){
			count +=1;
			console.log(test(i,0,50),i);
		}
	}
	return;
}

console.log(main(process.argv[2]));