function m_n1(d,a,m){
	return d*a -m;
}
function d_n1(s,m,d){
	return (s-m*m)/d;
}
function a_n1(a,m,d){
	return Math.floor((a+m)/d)
}
function repeat(arr){
	var i=1,
		res =[],
		dist,
		end, start, len;
	while(i <= arr.length/2){
		len = arr.length;
		dist = arr.length - i;
		end = parsearr.slice(len-dist,len-1).join(''),10);
		start = arr.slice(len-2*dist -1,len-dist -1);
		if()
	}
}
function approx (s, n){
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,
		bool = true
		while(bool){
			m.push(m_n1(d[i],a[i],m[i]));
			d.push(d_n1(s,m[i+1],d[i]));
			a.push(a_n1(a[0],m[i+1],d[i+1]));
			if(i)
			i+=1;
		}
		console.log(m);
		console.log(d);
		console.log(a);
	return;
}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	approx(n,7);
	return;
}

console.log(main(process.argv[2]));