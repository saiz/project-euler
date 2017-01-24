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
function main(start, end, goal) {
	'use strict';
	start = parseInt(start,10);
	end = parseInt(end,10);
	goal = parseInt(goal,10);
	var array = create_array(start,end),
		count = 1;
	while( nextPerm(array)){
		count+=1;
		if(goal === count){
			return array.join("");
		}
	}
	array = [];
	return array.join("");
}
function main() {
	'use strict';
	var i ='test';
	return i;
}

console.log(main(process.argv[2]));