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
function(next(arr,index,d)){
	var num = parseInt(String(arr[arr.length -1]).slice(2,4),10),
		i = index[arr.length -1];
}
function main(){
	var triangle = dict(tri),
		square = dict(squ),
		pentagonal = dict(pent),
		hexagonal = dict(hex),
		heptagonal = dict(hept),
		d=[square,pentagonal,hexagonal,heptagonal,octogonal],
		octogonal = dict(oct),
		index =[ 0,0,0,0,0,0],
		arr = []
		i = 0;
		sol[0] = triangle[0];
	while(i< d.length){
		arr[i].push(d[index[i]]);
		i+=1;
	}
	c

}


console.log(main(process.argv[2]));