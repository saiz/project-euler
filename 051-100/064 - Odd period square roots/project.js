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
	var bool = true;
	if(a.length !== b.length){
		bool = false;
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
function repeat(arr,precision){
	var i=0,j,
		dist,
		index, rem = null,
		bool = false;
	while(i < Math.floor(arr.length/2) && arr.length >= precision){
		dist = Math.floor(len/2 -i);
		j=2;
		bool = true;
		while(j<=precision && bool){
			index = arr.slice(arr.length-j*dist,arr.length-(j-1)*dist );
			if(!equal(index,arr.slice(arr.length-dist,arr.length)) ){
				bool = false;
			}
			j+=1;
		}
		if(bool){
			i = arr.length;
			rem = arr.slice(0,arr.length-precision*dist).join('');
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
		repeat:arr.slice(arr.length-dist,arr.length)
	};
}
function approx (s,precision){
	var	m = [0],
		d = [1],
		a = [Math.floor(Math.sqrt(s))],
		i = 0,
		bool = true,
		rep;
	while(bool){
		m.push(m_n1(d[i],a[i],m[i]));
		d.push(d_n1(s,m[i+1],d[i]));
		a.push(a_n1(a[0],m[i+1],d[i+1]));
		rep = repeat(a,precision);
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
	var i = 2,
		per = 10,
		count = 0;
	while(i <= n){
		if(Math.sqrt(i)%1 !== 0){
			if(approx(i,per).repeat.length %2 === 1){
				console.log(i);
				count +=1;
			}
		}
		i+=1;
	}
	console.log("------");
	return count;
}

console.log(main(process.argv[2]));