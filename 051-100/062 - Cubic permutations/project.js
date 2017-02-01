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
function zero_to_n_array(n){
	var index=[],i;
	for(i=0;i<n;i+=1){
		index[i]=i;
	}
	return index;
}
var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};
function plus(obj,i){
	if(obj[i]===undefined){
		obj[i] = 1;
	} else{
		obj[i] +=1;
	}
}
function main() {
	'use strict';
	var i = 1,
		len =5,
		index = [],
		cubes = {},
		bool =true,
		bool2,
		j,k,res,str,num;
	while(bool){
		j=i*i*i;
		str = String(j)
		plus(cubes,j);
		console.log(i,j,cubes.length);
		i+=1;
	}
	return res;
}

console.log(main(process.argv[2]));