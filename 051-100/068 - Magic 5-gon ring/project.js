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
function comb (m, n){
	var arr = {},
		i,j,k;
	for(i=m;i>0;i-=1){
		for(j=m;j>0;j-=1){
			if(j !== m){
				k = n - i - j;
				if(k>0 && k<=m && k!==i && k!==j){
					if(arr[i] === undefined){
						arr[i] = 0;
					}
					arr[i]+=1;
				}
			}
		}
	}
	i=0;
	return arr;
}
function high(dict){
	var key,
		max = {
			v:0,
			k:0
		};
	for (key in dict){
		if(dict[key] > max.v){
			max.k = parseInt(key,10);
			max.v =  parseInt(dict[key],10) ;
		}
	}
	delete dict[max.k];
	return max.k;
}
function high_array(dict){
	var arr = [];
	while(Object.keys(dict).length > 0){
		arr.push(high(dict));
	}
	return arr;
}
function side(arr,i){
	if (i === arr.length -1){
		return [arr[i-1],arr[0]];
	}
	if (i === 0){
		return [arr[arr.length-1],arr[i+1]];
	}
	return [arr[i-1],arr[i+1]];
}
function main() {
	'use strict';
	var n = 10, // number 1 - n
		m = 5, // number of pairs
		d = 3, // length of comb
		len = 16,
		i =Math.pow(10,9), j,
		str, arr, h, l,bool = true,bool2,,
		matrix = comb(n, len);
		arr = high_array(matrix);
		matrix = comb(n, len);
		h = arr.slice(0,m);
		l = arr.slice(Math.max(arr.length - m, 1));
		while(nextPerm(h) && bool){
			bool2 = true;
			for(j=0;j<h.length;j+=1){
				if()
				console.log(h[j],side(h,j));
			}

		}



	return;
}


console.log(main(process.argv[2]));