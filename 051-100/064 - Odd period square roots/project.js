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
		end,mid, start, len, rem = null,
		bool =false;
	while(i < Math.floor(arr.length/2)){
		len = arr.length;
		dist = Math.floor(len/2 -i);
		start = arr.slice(len-3*dist,len-2*dist );
		mid = arr.slice(len-2*dist,len-dist );
		end = arr.slice(len-dist,len);
		console.log(arr,start,end);
		if(equal(start,mid) && equal(mid,end)){
			bool =true;
			i = arr.length;
			if(len-dist-end.length -1 >=0){
				rem = arr.slice(0,len-3*dist).join('');
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
function approx2 (s,n){
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,
		bool = true, rep;
		while(i<n){
			m.push(m_n1(d[i],a[i],m[i]));
			d.push(d_n1(s,m[i+1],d[i]));
			a.push(a_n1(a[0],m[i+1],d[i+1]));
			console.log(a);
			rep = repeat(a);
			if(rep.repeat !== null){
				bool = false;
			}
			i+=1;
		}
	return rep;
}
function approx (s){
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,
		bool = true, rep;
		while(bool){
			m.push(m_n1(d[i],a[i],m[i]));
			d.push(d_n1(s,m[i+1],d[i]));
			a.push(a_n1(a[0],m[i+1],d[i+1]));
			rep = repeat(a);
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
	var i = 2;
	//console.log(approx2(3,2));
	while(i <= n){
		if(Math.sqrt(i)%1 !== 0){
			console.log(i,approx(i));
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));