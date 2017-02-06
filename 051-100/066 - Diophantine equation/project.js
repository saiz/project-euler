function a_n(n,d,a,p,q,P,Q){
	if(a[n] !== undefined){
		return a[n];
	}
	if(n === 0){
		a[n] = Math.floor(Math.sqrt(d));
		return a[n];
	}
	a[n] = Math.floor((a_n(0,d,a,p,q,P,Q)+P_n(n,d,a,p,q,P,Q))/Q_n(n,d,a,p,q,P,Q));
	return a[n];
}
function p_n(n,d,a,p,q,P,Q){
	if(p[n] !== undefined){
		return p[n];
	}
	if(n === 0 ){
		p[n] = a_n(n,d,a,p,q,P,Q);
		return p[n];
	}
	if(n === 1){
		p[n] = a_n(n-1,d,a,p,q,P,Q)*a_n(n,d,a,p,q,P,Q) +1;
		return p[n];
	}
	p[n] = a_n(n,d,a,p,q,P,Q)*p_n(n-1,d,a,p,q,P,Q) +p_n(n-2,d,a,p,q,P,Q);
	return p[n];
}
function q_n(n,d,a,p,q,P,Q){
	if(q[n] !== undefined){
		return q[n];
	}
	if(n === 0){
		q[n] = 1;
		return q[n];
	}
	if(n === 1){
		q[n] = a_n(n,d,a,p,q,P,Q);
		return q[n];
	}
	q[n] = a_n(n,d,a,p,q,P,Q)*q_n(n-1,d,a,p,q,P,Q) +q_n(n-2,d,a,p,q,P,Q);
	return q[n];
}
function Q_n(n,d,a,p,q,P,Q){
	if(Q[n] !== undefined){
		return Q[n];
	}
	if(n === 0){
		Q[n] = 1;
		return Q[n];
	}
	if(n === 1){
		Q[n] = d - Math.pow(a_n(n-1,d,a,p,q,P,Q),2);
		return Q[n];
	}
	Q[n] = (d - Math.pow(P_n(n,d,a,p,q,P,Q),2))/Q_n(n-1,d,a,p,q,P,Q);
	return Q[n];
}

function P_n(n,d,a,p,q,P,Q){
	if(P[n] !== undefined){
		return P[n];
	}
	if(n === 0){
		P[n] = 0;
		return P[n];
	}
	if(n === 1){
		P[n] = a_n(n,d,a,p,q,P,Q);
		return P[n];
	}
	P[n] = a_n(n-1,d,a,p,q,P,Q)*Q_n(n-1,d,a,p,q,P,Q) - P_n(n-1,d,a,p,q,P,Q);
	return P[n];
}

function main(m) {
	'use strict';
	m =parseInt(m,10);
	var n = 0,
		a = [],
		p = [],
		q = [],
		P = [],
		Q = [],
		d =5;
	while(true){
		a_n(n,d,a,p,q,P,Q);
		p_n(n,d,a,p,q,P,Q);
		q_n(n,d,a,p,q,P,Q);
		P_n(n,d,a,p,q,P,Q);
		Q_n(n,d,a,p,q,P,Q);
//		console.log(p);
		console.log('--');
		n+=1;
	}
	console.log('--');
	return max; //{x:x,d:d};
}

console.log(main(process.argv[2]));