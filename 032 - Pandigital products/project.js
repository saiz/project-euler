function create_array(start,end){
	'use strict';
	var array=[],i;
	for(i=start;i<=end;i+=1){
		array.push(i);
	}
	return array;
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
function perm_array(start, end) {
	'use strict';
	var array = create_array(start,end),
	matrix = [];
	while( nextPerm(array)){
		matrix.push(array.slice(0).join(""));
	}
	return matrix;
}
function add(a, b) {
    return a + b;
}
function next_split(array,length){
	console.log(array);
	if(array[2] -1 !== 0){
		array[2] -= 1;
		array[1] += 1
	} else {
		array[0] +=1;
		array[1] = 1;
		array[2] = length - array[0] - 1;
	}
	if(array[2] === 0){
		return false;
	}
	return true;
}
function main(start, end) {
	start = parseInt(start,10);
	end = parseInt(end,10);
	var array =  perm_array(start, end),
		temp = [],
		result = [],
		i, a,b,c;
	for(i=0;i<array.length;i+=1){
		temp = [1,1,end -2];
		while(next_split(temp,end)){
			console.log(temp);
			a = array[i].substring(0,temp[0]);
			b = array[i].substring(temp[0],temp[0] + temp[1]);
			c = array[i].substring(temp[0] + temp[1]);
		}
	}
	return result;
}

console.log(main(process.argv[2],process.argv[3],process.argv[4]));