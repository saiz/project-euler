function a_n(n,d,a,p,q){
	// console.log(a);
	if(a[n] !== undefined){
		return a[n];
	}
	if(n === 0){
		a[n] = Math.floor(Math.sqrt(d));
		return a[n];
	}
	return a[n];
}
function p_n(n,d,a,p,q){
	if(p[n] !== undefined){
		return p[n];
	}
	if(n === 0 ){
		p[n] = a_n(0,d,a,p,q);
		return p[n];
	}
	if(n === 1){
		p[n] = a_n(0,d,a,p,q)*a_n(1,d,a,p,q) +1;
		return p[n];
	}
	p[n] = a_n(n,d,a,p,q)*p_n(n-1,d,a,p,q) +p_n(n-2,d,a,p,q);
	return p[n];
}
function q_n(n,d,a,p,q){
	if(q[n] !== undefined){
		return q[n];
	}
	if(n === 0){
		q[n] = 1;
		return q[n];
	}
	if(n === 1){
		q[n] = a_n(1,d,a,p,q);
		return q[n];
	}
	q[n] = a_n(n,d,a,p,q)*q_n(n-1,d,a,p,q) +q_n(n-2,d,a,p,q);
	return q[n];
}

function main(m) {
	'use strict';
	m =parseInt(m,10);
	var n = 0,
		a = [],
		p = [],
		q = [],
		d =5;
		while(true){
			a_n(n,d,a,p,q);
			p_n(n,d,a,p,q);
			q_n(n,d,a,p,q);
			console.log(p);
			console.log('--');
			n+=1;
		}
	return; //{x:x,d:d};
}

console.log(main(process.argv[2]));