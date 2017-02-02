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
function repeat(arr,precision){
	var i=0,j,
		res =[],
		dist,
		end,index, len, rem = null,
		bool;
	while(i < Math.floor(arr.length/2) && arr.length >==){
		len = arr.length;
		dist = Math.floor(len/2 -i);
		end = arr.slice(len-dist,len);
		j=2;
		bool = true;
		while(j<=precision && bool){
			index = arr.slice(len-j*dist,len-(j-1)*dist );
			if(!equal(index,end) ){
				bool = false;
			}
			j+=1;
		}
		//console.log(arr,end);
		if(bool){
			i = arr.length;
			rem = arr.slice(0,len-precision*dist).join('');
		}
		i+=1;
	}
	//console.log(arr);
	if(!bool){
		return{
			s:arr.join(''),
			repeat:null
		};
	}
	return {
		s:rem,
		repeat:end
	};
}
function approx (s,percision){
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,
		bool = true, rep;
		while(bool){
			m.push(m_n1(d[i],a[i],m[i]));
			d.push(d_n1(s,m[i+1],d[i]));
			a.push(a_n1(a[0],m[i+1],d[i+1]));
			rep = repeat(a,percision);
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
		app, count = 0;
	//console.log(approx2(3,2));
	while(i <= n){
		if(Math.sqrt(i)%1 !== 0){
			app = approx(i,per);
			if(app.repeat.length %2 === 1){
				count +=1;
				console.log(i);
			}
		}
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));