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
function other_perm(str){
	var perm = String(str).split(""),
		i=0, result=[], copy;
	while(i<perm.length){
		perm[i] =parseInt(perm[i],10);
		i+=1;
	}
	copy = parseInt(perm.join(''),10);
	result.push(copy);
	while( nextPerm(perm)){
		copy = parseInt(perm.join(''),10);
		if(isPrime3(copy)){
			result.push(copy);
		}
	}
	return result;
}
function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  };
    f('', chars);
  return result;
}
function create_array(start,end){
	'use strict';
	var array=[],i;
	for(i=start;i<=end;i+=1){
		array.push(i);
	}
	return array;
}
function isPrime3(n) {
	'use strict';
	if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
	if (n%2===0) {return (n===2);}
	if (n%3===0) {return (n===3);}
	var m=Math.sqrt(n), i;
	for (i=5;i<=m;i+=6) {
		if (n%i===0)     {return false;}
		if (n%(i+2)===0) {return false;}
	}
	return true;
}
function prim_list(array){
	var i =array.length -1;
	while(i>=0){
		if(!isPrime3(array[i])){
			array.splice(i,1);
		}
		i-=1;
	}
}
function increasing_Numbers(array){
	var i =0,
		j=0,
		bool = true,
		a,
		b,
		diff;
	while(i<array.length-1 && bool){
		a = array[i];
		j=i+1;
		while(j<array.length  && bool){
			b=array[j];
			diff = Math.abs(a-b);
			if(array.indexOf(b+diff)> -1){
				bool = false;
			}
			j+=1;
		}
		i+=1;
	}
	if(bool){
		return [];
	}
	return [a,b,b+diff];
}
function main() {
	'use strict';
	var start = 1,
		end = 4,
		array = create_array(start,9);
		var temp,
			i=Math.pow(10,3);
		while(i<Math.pow(10,4)){
			temp = other_perm(i);
			prim_list(temp);
			temp.sort();
			if(increasing_Numbers(temp).length > 0){
				console.log(temp,increasing_Numbers(temp));
			}
			i+=1;
		}
	return;
}

console.log(main(process.argv[2]));