function tri(n){ return n*(n+1)/2;} //3
function squ(n){ return Math.pow(n,2);} //4
function pent(n){ return n*(3*n-1)/2;} //5
function hex(n){ return n*(2*n-1);} //6
function hept(n){ return n*(5*n-3)/2;} //7
function oct(n){ return n*(3*n-2);} //8
function dict(callback){
	var i =0,
		obj = [],
		n = 0;
	while(String(n).length <=4){
		n = callback(i);
		if(String(n).length === 4 ){
			obj.push(n);
		}
		i+=1;
	}
	//console.log(obj.length);
	return obj;
}
function shape() {
	'use strict';
	var array = [];
	array.push( dict(tri));
	array.push( dict(squ));
	array.push( dict(pent));
	array.push( dict(hex));
	array.push( dict(hept));
	array.push( dict(oct));
	return array;
}
function shape2() {
	'use strict';
	var array = [];
	array.push( 'tri');
	array.push( 'squ');
	array.push( 'pent');
	array.push( 'hex');
	array.push( 'hept');
	array.push( 'oct');
	return array;
}
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
function main(){
	var list=shape(),
		list2= shape2(),
		index =[0,0,0,0,0,0],
		arr = [],
		i = 0,k,j = 0,a,b,c,d,
		bool = true,
		res= [];
		list2.sort();
		list.sort();

	while(nextPerm(list)){
		j+=1;
		console.log(j)
		while(bool){
			if(i===0){
				arr[i] =list[i][index[i]];
				i+=1;
			}
			if(index[i] >= list[i].length){
				//console.log('adasd')
				for(k=i;k<index.length;k+=1){
					index[k]  = 0;
				}
				i-=1;
				index[i] +=1;
				arr[i] =list[i][index[i]];
			} else if(i!==0){
				b = Math.floor(list[i][index[i]]/100);
				a = list[i-1][index[i-1]]%100;
				//console.log(arr);
				if(a!==b){
					index[i] +=1;
				}
				if(a===b){
					arr[i] = list[i][index[i]];
					i+=1;
				}
			}
			if(i === list.length){
				c = list[i-1][index[i-1]]%100;
				d = Math.floor(list[0][index[0]]/100);
				if(c!==d){
					i-=1;
					index[i] +=1;
				} else{
					res.push(arr.slice(0));
				}

			}
			if(index[0] === list[0].length -1 && index[1] === list[1].length -1){
				bool = false;
			}
		}
	}
	console.log(res);

}


console.log(main(process.argv[2]));