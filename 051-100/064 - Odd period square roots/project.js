function m_n1(d,a,m){
	return d*a -m;
}
function d_n1(s,m,d){
	return (s-m*m)/d;
}
function a_n1(a,m,d){
	return Math.floor((a+m)/d);
}
function equal(a,b){
	if(a.length !== b.length){
		return false;
	}
	var bool = true,
		i=0;
	while(i<a.length && bool){
		if(a[i]!==b[i]){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function repeat(arr){
	var i=0,
		res =[],
		dist,
		end, start, len, rem = null,
		bool =false;
	while(i < Math.floor(arr.length/2)){
		len = arr.length;
		dist = Math.floor(len/2 -i);
		end = arr.slice(len-dist,len);
		start = arr.slice(len-dist-end.length,len-dist-1 );
		console.log(arr);
		console.log(start,end);
		console.log(start,end);
		if(equal(start,end)){
			bool =true;
			i = arr.length;
			if(len-dist-end.length -1 >=0){
				rem = arr.subarray(0,len-dist-end.length -1).join('');
			}
		}
		i+=1;
	}
	if(!bool){
		return{
			s:arr.join(''),
			repeat:null
		};
	}
	return {
		s:rem,
		repeat:start
	};
}
function approx (s, n){
	if(Math.sqrt(s) %1 == 0){
		return{
			s:Math.sqrt(s),
			repeat:null
		};
	}
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,
		bool = true, rep;
		while(bool){
			m.push(m_n1(d[i],a[i],m[i]));
			d.push(d_n1(s,m[i+1],d[i]));
			a.push(a_n1(a[0],m[i+1],d[i+1]));
			// console.log(m);
			// console.log(d);
			rep = repeat(a);
			// console.log(a);
			// console.log(rep);
			if(rep.repeat !== null){
				bool = false;
			}
			i+=1;
		}
	return rep;
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	approx(n,7);
	return;
}

console.log(main(process.argv[2]));