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
		d=[square,pentagonal,hexagonal,heptagonal,octogonal],
		index =[ 0,0,0,0,0,0],
		arr = [],
		i = 0,j;
	while(i< d.length){
		arr[i]=d[i][index[i]];
		if(i>0){
			j = parseInt(String(arr[i-1]).slice(2,4),10);
			while(j !== parseInt(String(arr[i]).slice(0,2),10) && index[i]< d[i].length){
				console.log(j);
				index[i] +=1;
				arr[i]=d[i][index[i]];
			}
			console.log(j)
		}
		i+=1;
	}
	console.log(arr);

}


console.log(main(process.argv[2]));