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
	var i = 1,j,k,res,
		index = [],
		bool =true;
	while(bool){
		j=Math.cbrt(i);
		res = [];
		if(j%1 === 0){
			res.push(i);
			index =[];
			for(k=0;k<String(i).length;k+=1){
				index[k]=k;
			}

			console.log(index,i,j);
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));