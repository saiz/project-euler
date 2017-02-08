function len(n){
	if(n === 1){
		return n;
	}
	return  n + len(n-1);
}
function len2(n,m){
	if(m === 1){
		return n;
	}
	return  n + len2(n-1, m-1);
}
function comb (m, n){
	var arr = [],
		i,j,k;
	for(i=1;i<=m;i+=1){
		for(j=1;j<i;j+=1){
			for(k=1;k<j;k+=1){
				if(i+j+k === n){
					arr.push([i,j,k]);
				}
			}
		}
	}
	i=0;
	while(i < arr.length){
		arr[i].sort(function(a, b) {
			return b - a;
		});
		i+=1;
	}
	return arr;
}
function hashmap(m,n){
	var i, j, k,hash={}, arr;
	for(i=0;i<m.length;i+=1){
		for(j=0;j<m[i].length;j+=1){
			if(hash[m[i][j]] === undefined	){
				hash[m[i][j]] = [];
			}
			arr = [];
			for(k=0;k<m[i].length;k+=1){
				if(m[i][j] !== m[i][k]){
					arr.push(m[i][k]);
				}
			}
			hash[m[i][j]].push(arr);
		}
	}
	return hash;
}
function limit(hash){
	var key,
	copy = hash;
	for( key in copy){
		console.log(key,copy[key].length,copy[key]);
	}
	return copy;
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
function nextPerm(array){
	'use strict';
	var i = array.length -1;
	while(i>0 && (array[i-1] >= array[i])){
		i-=1;
	}
	if(i<=0){
		return false;
	}
	var j = array.length -1;
	while(array[j] <= array[i-1]){
		j-=1;
	}
	var temp = array[i-1];
	array[i-1] = array[j];
	array[j] = temp;
	j = array.length - 1;
	while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i+=1;
        j-=1;
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
		// dict = hashmap(matrix,n);
		// limit(dict);
		console.log(matrix)
		// while(i > 0){
		// 	str =String(i);
		// 	arr  = [str.slice(0,3),str.slice(3,6),str.slice(6,9)];
		// 	//console.log(arr);
		// 	if(check(arr,len)){
		// 		console.log([val(arr[0]),val(arr[1]),val(arr[2])]);
		// 		console.log(arr);
		// 		console.log("--")
		// 	}
		// 	i-=1;

		// }
		//console.log(dict);

	return;
}


console.log(main(process.argv[2]));