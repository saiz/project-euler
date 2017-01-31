function tri(n){ return n*(n+1)/2;} //3
function squ(n){ return n*n;} //4
function pent(n){ return n*(3*n-1)/2;} //5
function hex(n){ return n*(2*n-1);} //6
function hept(n){ return n*(5*n-3)/2;} //7
function oct(n){ return n*(3*n-2);} //8
function dict(callback){
	var i =0,
		obj = []
		n = 0;
	while(String(n).length <=4){
		n = callback(i);
		if(String(n).length === 4 ){
			obj.push(n);
		}
		i+=1;
	}
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
function main(){
	var triangle = dict(tri),
		square = dict(squ),
		pentagonal = dict(pent),
		hexagonal = dict(hex),
		heptagonal = dict(hept),
		octogonal = dict(oct),
		list=[triangle,square,pentagonal,hexagonal,heptagonal,octogonal],
		index =[0],
		arr = [],
		i = 0,k,a,b,c,d;
	while(i< list.length){
		if(i===0){
			arr[i] =list[i][index[i]];
			i+=1;
		} else {
			if(index[i] >=list[i].length){
				index[i-1] +=1;
				arr[i-1] =list[i-1][index[i-1]];
				index.splice(-1,1);
			}
			b = Math.floor(list[i][index[i]]/100);
			a = list[i-1][index[i-1]]%100;
			c = list[i][index[i]]%100;
			d = Math.floor(list[0][index[0]]/100);
			console.log(arr);
			console.log(index);
			if(a!==b){
				index[i] +=1;
				i-=1;
			} else {
				arr[i] = list[i][index[i]];
				i+=1;
			}
			if(i === list.length){
				// if(c!==d){
				// 	i-=1;
				// 	index[i] +=1;
				// }
				// if(index[i] >=list[i].length){
				// 	index[0]  = 0;
				// 	for(k=1;k<index.length;k+=1){
				// 		index[k] = 0;
				// 	}
				// 	arr = []
				// 	i = 0;
				// }
			}
		}
	}
	console.log(arr);

}


console.log(main(process.argv[2]));