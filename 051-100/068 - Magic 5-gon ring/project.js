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
function next(arr,i){
	if (i === arr.length -1){
		return arr[0];
	}
	return arr[i+1];
}
function create_array(n){
	var i  = 1,
		arr = [];
	while(i<=n){
		arr.push(i);
		i+=1;
	}
	return arr;
}
function low(n,m){
	var arr = 0;
	while(m > 0){
		arr +=n;
		n+=1;
		m-=1;
	}
	return arr;
}
function high(n,m){
	var arr = 0;
	while(m > 0){
		arr +=n;
		n-=1;
		m-=1;
	}
	return arr;
}
function test(arr){
	var bool2 = true,
	l = arr.slice(0,m);
	h = arr.slice(Math.max(arr.length - m, 1)).sort(),
	j,index,side;
	for(j=0;j<h.length;j+=1){
		side = next(h,j);
		index = l.indexOf(len - (side+h[j]));
		if (index > -1) {
		    l.splice(index, 1);
		}
	}
	if(l.length === 0 )

}
function main() {
	'use strict';
	var n = 10, // number 1 - n
		m = 5, // number of pairs
		d = 3, // length of comb
		min,max, len, j,
		arr, h, l,bool = true,bool2,side,index;
		arr = create_array(n);
		max = high(n,d);
		min = low(1,d);
		len = min;
		console.log(min,max);
		while(len < max && bool){
			while(nextPerm(arr) && bool){
				bool2 = true;
				l = arr.slice(0,m);
				h = arr.slice(Math.max(arr.length - m, 1)).sort();
				for(j=0;j<h.length;j+=1){
					side = next(h,j);
					index = l.indexOf(len - (side+h[j]));
					if (index > -1) {
					    l.splice(index, 1);
					}
				}
				console.log(l);
				if(l.length === 0){
					l = arr.slice(0,m);
					console.log('winner');
					console.log('h',h);
					console.log('l',l);
				}
			}
			len+=1;
		}



	return;
}


console.log(main(process.argv[2]));