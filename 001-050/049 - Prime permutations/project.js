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
function number_of_perm(str, array){
	var perm = String(str).split(""),
		count = 1,
		i=0;
	while(i<perm.length){
		perm[i] =parseInt(perm[i],10);
	}
	while( nextPerm(perm)){
		if(array.indexOf(parseInt(perm.join(''),10)) >=0){
			count+=1;
		}
	}
	return count;
}
function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
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
function main() {
	'use strict';
	var start = 1,
		end = 4,
		array = create_array(start,9),
		comb = getCombinations(array),
		i=comb.length -1;
		while(i>= 0){
			if(comb[i].length !== 4){
				comb.splice(i, 1);
			} else if(!isPrime3(parseInt(comb[i],10))){
				comb.splice(i, 1);
			} else {
				comb[i] =parseInt(comb[i],10);
			}
			i-=1;
		}
		i=comb.length -1;
		while(i>= 0){
			console.log(i, number_of_perm(i,comb));
			i+=1;
		}
		console.log(comb);
	return;
}

console.log(main(process.argv[2]));