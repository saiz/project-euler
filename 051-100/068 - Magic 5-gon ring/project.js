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
function create_array(start,end){
	'use strict';
	var array=[],i;
	for(i=start;i<=end;i+=1){
		array.push(i);
	}
	return array;
}
function create_matrix(arr,matrix,n){
	var i = 0;
	while(i <arr.length){
		matrix.push(arr.slice(i,i+n));
		i+=n;
	}
}
function main() {
	'use strict';
	var arr = create_array(1,9),
		matrix =[];
	while(nextPerm(arr)){
		matrix = [];
		create_matrix(arr,matrix,3);
		console.log(matrix);
	}

	return;
}

console.log(main(process.argv[2]));