Array.prototype.subarray = function(i, j){
    var self = this, arr = [];
    for(var n = 0;i <= j; i++, n++){
        (function(i){
            Object.defineProperty(arr, n, {       //Array is an Object
                get: function(){
                    return self[i];
                },
                set: function(value){
                    self[i] = value;
                    return value;
                }
            });
        })(i);
    }
    return arr;
}

function m_n1(d,a,m){
	return d*a -m;
}
function d_n1(s,m,d){
	return (s-m*m)/d;
}
function a_n1(a,m,d){
	return Math.floor((a+m)/d);
}
function repeat(arr){
	var i=1,
		res =[],
		dist,
		end, start, len, rem = null,
		bool =false;
	while(i <= arr.length/2){
		len = arr.length;
		dist = len - i;
		end = arr.subarray(len-dist,len -1).join('');
		start = arr.subarray(len-dist-end.length,len-dist -1 ).join('');
		console.log(arr);
		console.log(len-dist,len -1, end);
		console.log(len-dist-end.length,len-dist -1, start);
		if(start === end){
			bool =true;
			console.log('adsas');
			// i = arr.length;
			// if(len-2*dist -1 >0){
			// 	rem = arr.slice(0,len-2*dist -1).join('');
			// }
		}
		i+=1;
	}
	// if(!bool){
	// 	return{
	// 		rem:null,
	// 		repeat:null
	// 	};
	// }
	// return {
	// 	rem:rem,
	// 	repeat:start.split('')
	// };
}
function approx (s, n){
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,
		bool = true;
		while(bool){
			m.push(m_n1(d[i],a[i],m[i]));
			d.push(d_n1(s,m[i+1],d[i]));
			a.push(a_n1(a[0],m[i+1],d[i+1]));
			// console.log(m);
			// console.log(d);
			// console.log(a);
			console.log(repeat(a));
			i+=1;
		}
	return;
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	approx(n,7);
	return;
}

console.log(main(process.argv[2]));