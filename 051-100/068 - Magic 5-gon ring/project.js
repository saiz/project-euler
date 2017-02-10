function comb (m, n){
	var arr = [],
		i,j,k;
	for(i=1;i<=m;i+=1){
		for(j=1;j<i;j+=1){
			k = n - i - j;
			if(k>0 && k<m ){
				arr.push([i,j,k]);
			}
		}
	}
	i=0;
	// while(i < arr.length){
	// 	arr[i].sort(function(a, b) {
	// 		return b - a;
	// 	});
	// 	i+=1;
	// }
	return arr;
}

function parse(n){
	if(n === '0'){
		return 10;
	}
	return parseInt(n,10);
}
function val(str){
	return parse(str[0]) + parse(str[1]) + parse(str[2]);
}
function check(arr, n) {
	var i = 0;
	while( i<arr.length){
		if(val(arr[i])!==n){
			return false;
		}
		i+=1;
	}
	return true;
}
function sort(arr,n){

	var i =0,
		matrix=[];
	while(i<arr.length){
		if(matrix[n - arr[i][0]] === undefined){
			matrix[n - arr[i][0]] = [];
		}
		matrix[n - arr[i][0]].push(arr[i]);
		i+=1;
	}
	return matrix;
}
function gen_n(n) {
	var i=0, str = '';
	while(i < n ){
		str += String(i);
		i+=1;
	}
	return parseInt(str,10);
}
function is_unique(str) {
  var obj = {};
  for(var z=0;z<str.length;++z) {
    var ch = str[z];
    if(obj[ch]) return false; else obj[ch] = true;
  }
  return true;
}
function main() {
	'use strict';
	var n = 10, // number 1 - n
		m = 5, // number of pairs
		d = 3, // length of comb
		len = 16,
		i =Math.pow(10,9),
		str, arr,
		matrix = comb(n, len);
		arr = sort(matrix,n);
		// dict = hashmap(matrix,n);
		// limit(dict);
		console.log(arr)
		// var j;
		// for(j = gen_n(m);j<Math.pow(10,m); j+=1){
		// 	if(is_unique(String(j))){
		// 		console.log(j)
		// 	}
		// }


	return;
}


console.log(main(process.argv[2]));