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
		matrix.push(parseInt(array.slice(0).join(""),10));
	}
	return matrix;
}
function pandigital(n){
	'use strict';
	var i=1, bool = true;
	while(i <= n.length && bool){
		if(n.indexOf(i) === -1){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function main(start, end) {
	start = parseInt(start,10);
	end = parseInt(end,10);
	var array =  perm_array(start, end),
		result = [],
		i,j, bool;
	for(i=0;i<array.length;i+=1){
		for(j=1;j<=Math.sqrt(array[i]);j+=1){
			if((array[i] % j === 0)){
				if(pandigital( String(j) + String(array[i] / j) ) ){
					result.push(array[i]);
					j = Math.sqrt(array[i]) + 1;
				}
			}
		}
		//console.log(array[i],bool);
	}
	return result;
}

console.log(main(process.argv[2],process.argv[3],process.argv[4]));