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
function other_perm(str, array){
	var perm = String(str).split(""),
		i=0, result=[], copy;
	while(i<perm.length){
		perm[i] =parseInt(perm[i],10);
		i+=1;
	}
	copy = parseInt(perm.join(''),10);
	if(!isPrime3(copy)){
		console.log('prime');
	}
	if (array.indexOf(copy) > -1) {
		result.push(copy);
	    array.splice(array.indexOf(copy), 1);
	}
	while( nextPerm(perm)){
		copy = parseInt(perm.join(''),10);
		result.push(copy);
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
			} else {
				comb[i] =parseInt(comb[i],10);
			}
			i-=1;
		}
		var perm;
		for(i=0;i<comb.length;i+=1){
			perm = String(comb[i]).split("");
			while( nextPerm(perm)){
				if(comb.indexOf(parseInt(perm.join(''),10)) < 0){
					comb.push(parseInt(perm.join(''),10));
				}
			}
		}
		i=comb.length -1;
		while(i>= 0){
			if(!isPrime3(comb[i])){
				comb.splice(i, 1);
			}
			i-=1;
		}
		i=comb.length -1;
		var temp;
		while(i>= 0){
			temp = other_perm(comb[i],comb).sort();
			if(temp.length >3){
				//console.log(temp)
			}
			i-=1;
		}
	return;
}

console.log(main(process.argv[2]));