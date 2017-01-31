function tri(n){ return n*(n+1)/2;} //3
function squ(n){ return n*n;} //4
function pent(n){ return n*(3*n-1)/2;} //5
function hex(n){ return n*(2*n-1);} //6
function hept(n){ return n*(5*n-3)/2;} //7
function oct(n){ return n*(3*n-2);} //8
function dict(callback){
	var i =0,
		obj = {s:{},e:{}},
		n = 0;
	while(String(n).length <=4){
		n = callback(i);
		if(String(n).length === 4 ){
			if(obj['e'][String(n).slice(2,4)] === undefined && parseInt(String(n).slice(2,4),10) >=10){
				obj['e'][String(n).slice(2,4)] = [];
			}
			if(parseInt(String(n).slice(2,4),10) >=10){
				obj['e'][String(n).slice(2,4)].push(callback(i));
			}
			if(obj['s'][String(n).slice(0,2)] === undefined && parseInt(String(n).slice(0,2),10) >=10){
				obj['s'][String(n).slice(0,2)] = [];
			}
			if(parseInt(String(n).slice(0,2),10) >=10){
				obj['s'][String(n).slice(0,2)].push(callback(i));
			}
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
function find(index,shape) {
	var num = parseInt(String(index[index.length -1]).slice(2,4),10);
	console.log('---')
	console.log(index);
	if(shape.s[num] === undefined){
		return	[];
	}
	return shape.s[num];
}
function search()
function main(){
	var triangle = dict(tri),
		square = dict(squ),
		pentagonal = dict(pent),
		hexagonal = dict(hex),
		heptagonal = dict(hept),
		octogonal = dict(oct),
		d = [square,pentagonal,hexagonal,heptagonal,octogonal],
		i=0,j, k,key, index;
	for(key in triangle.e){
		i =0;
		while(i <triangle.e[key].length){
			index = [];
			index.push(triangle.e[key][i]);
			if(find(index,square).length >0){
				console.log(find(index,square))
			}
			i+=1;
		}
		//console.log(triangle);
	}

}


console.log(main(process.argv[2]));