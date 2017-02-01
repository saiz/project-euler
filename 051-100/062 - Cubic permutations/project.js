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
function main() {
	'use strict';
	var i = 1,
		len =5,
		index = [],
		bool =true,
		bool2,
		j,k,l,res,str,num;
	while(bool){
		j=1;
		j=i*i*i;
		res = [j];
		index = zero_to_n_array(String(j).length);
		bool2 = true;
		while(nextPerm(index)){
			//console.log(index,i);
			str = '';
			for(k=0;k<index.length;k+=1){
				str += String(j)[index[k]];
			}
			num = parseInt(str.join(''),10);
			if((String(num).length === String(j).length) && (Math.cbrt(num)%1===0) && res.indexOf(num) === -1){
				res.push(num);
			}
		}
		//console.log(res);
		if(res.length === len){
			bool = false;
		}
		console.log(i);
		i+=1;
	}
	return res;
}

console.log(main(process.argv[2]));