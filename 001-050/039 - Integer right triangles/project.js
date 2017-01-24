function next_split(array,length){
	if(array[2] -1 !== 0){
		array[2] -= 1;
		array[1] += 1;
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
function main() {
	'use strict';
	var i ='test',
		end = 120,
		temp = [1,1,end -2];
		while(next_split(temp,end)){
			console.log(temp);
		}
	return i;
}

console.log(main(process.argv[2]));