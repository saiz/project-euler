function tri(n){ return n*(n+1)/2;}
function squ(n){ return n*n;}
function pent(n){ return n*(3*n-1)/2;}
function hex(n){ return n*(2*n-1);}
function hept(n){ return n*(5*n-3)/2;}
function oct(n){ return n*(3*n-2);}
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
			obj[String(n).slice(0,2)].push(i)
		}
		i+=1;
	}
	return obj;
}
function main() {
	'use strict';
	var i = dict(tri);
	console.log(tri(i[10][0]));
	return i;
}

console.log(main(process.argv[2]));