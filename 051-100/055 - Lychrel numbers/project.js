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
	if(i > end){
		return 0;
	}
	return test(add_rev(num),i+1,end);
}

function main() {
	'use strict';
	var _i =[0],i;
	console.log(test(12,0,50));
	// while(next(_i,Math.pow(10,4))){
	// 	i = _i[0];
	// }
	return;
}

console.log(main(process.argv[2]));