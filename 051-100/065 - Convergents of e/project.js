function b(i){
	if(i ===1){
		return 0;
	} else if( (i-1)%3 !== 0){
		return 1;
	}
	return 2*((i-1)/3);
}
function A(n,arr){
	if( arr.length < n ){
		return arr[n];
	}
	if(n === 0){
		arr[n] = b(0);
	} else if(n === 1){
		arr[n] = b(1)*b(0) +1;
	} else {
		arr[n] = b(n)*A(n-1) + 1*A(n-2);
	}
	return arr[n];
}
function main(j) {
	'use strict';
	j = parseInt(j,10) +1;
	var
	console.log(A(j,[]));
	return;
}


console.log(main(process.argv[2]));