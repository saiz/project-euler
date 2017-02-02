function m_n1(d,a,m){
	return d*a -m;
}
function d_n1(s,m,d){
	return (s-m*m)/d;
}
function a_n1(a,m,d){
	return Math.floor((a+m)/d);
}
function approx (s){
	var	m = [0],
		d = [1],
		a = [2],
		i = 0,
		bool = true,
		rep;
	while(bool){
		m.push(m_n1(d[i],a[i],m[i]));
		d.push(d_n1(s,m[i+1],d[i]));
		a.push(a_n1(a[0],m[i+1],d[i+1]));
		i+=1;
	}
	return rep;
}
function fraction(n, total){
	if(n =<0){
		return [2,1];
	}

}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =1,
		total =[1,1],
		e_n = [];
	while(i<n){
		total = add(total,fraction(i));
		console.log(total);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));