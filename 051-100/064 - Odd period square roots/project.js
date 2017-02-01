function m_n1(d,a,m){
	return d*a -m;
}
function approx (s, n){
	var	m = [0],
		d =[1],
		a =[Math.floor(Math.sqrt(s))],
		i=0,j;
		while(i < n){
			j =i+1;
			m.push(m_n1(m))
		}
	return a[i]
}
function main() {
	'use strict';

	return i;
}

console.log(main(process.argv[2]));