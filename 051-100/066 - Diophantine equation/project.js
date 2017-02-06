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
function p_n(n,a,p,q){
	if(p[n] !== undefined){
		return p[n];
	}
	if(n === 0 ){
		p[n] = a[0];
		return p[n];
	}
	if(n === 1){
		p[n] = a[0]*a[1] +1;
		return p[n];
	}
	p[n] = a[n]*p[n-1] +p[n-2];
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
		q[n] = a[1];
		return q[n];
	}
	q[n] = a[n]*q[n-1] +q[n-2];
	return q[n];
}
function a_n2(n,d,a,P,Q){
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
function Q_n(n,d,a,P,Q){
	if(Q[n] !== undefined){
		return Q[n];
	}
	if(n === 0){
		Q[n] = 1;
		return Q[n];
	}
	if(n === 1){
		Q[n] = d - a_n2()
		return Q[n];
	}
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