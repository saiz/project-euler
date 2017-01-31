function tri(n){ return n*(n+1)/2;} //3
function squ(n){ return n*n;} //4
function pent(n){ return n*(3*n-1)/2;} //5
function hex(n){ return n*(2*n-1);} //6
function hept(n){ return n*(5*n-3)/2;} //7
function oct(n){ return n*(3*n-2);} //8
function dict(callback){
	var i =0,
		obj = {},
		n = 0;
	while(String(n).length <=4){
		n = callback(i);
		if(String(n).length === 4 ){
			if(obj[String(n).slice(0,2)] === undefined){
				obj[String(n).slice(0,2)] = [];
			}
			obj[String(n).slice(0,2)].push(i);
		}
		i+=1;
	}
	return obj;
}

function shape() {
	'use strict';
	array = [];
	array.push( dict(tri));
	array.push( dict(squ));
	array.push( dict(pent));
	array.push( dict(hex));
	array.push( dict(hept));
	array.push( dict(oct));
	return array;
}
function main(){
	var arr = shape(),
		i=0;
	while(i<arr.length){
		console.log(arr[i]);
		i+=0;
	}
}

console.log(main(process.argv[2]));