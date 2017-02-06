function a_n(n,d,a,P,Q){
	// console.log(a);
	if(a[n] !== undefined){
		return a[n];
	}
	if(n === 0){
		a[n] = Math.floor(Math.sqrt(d));
		return a[n];
	}
	a[n] = Math.floor((a[0]+P[n])/Q[n]);
	return a[n];
}
function p_n(n,a,p){
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
function q_n(n,a,q){
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
function Q_n(n,d,a,P,Q){
	if(Q[n] !== undefined){
		return Q[n];
	}
	if(n === 0){
		Q[n] = 1;
		return Q[n];
	}
	if(n === 1){
		Q[n] = d - Math.pow(a[0],2);
		return Q[n];
	}
	Q[n] = (d - Math.pow(P[n],2))/Q[n-1];
	return Q[n];
}
function P_n(n,d,a,P,Q){
	if(P[n] !== undefined){
		return P[n];
	}
	if(n === 0){
		P[n] = 0;
		return P[n];
	}
	if(n === 1){
		P[n] = a[0];
		return P[n];
	}
	P[n] = a[n-1]*Q[n-1] - P[n-1];
	return P[n];
}
function diophantine (x,y,d){
	if(Math.pow(x,2) - d*Math.pow(y,2) !== 1){
		return false;
	}
	return true;
}
function main(m) {
	'use strict';
	m =parseInt(m,10);
	var a = [],
		p = [],
		q = [],
		P = [],
		Q = [],
		d = 2,
		x, y, n,
		max = {
			x:0,
			d:0
		}
	while(d <=m){
			n = 0;
			P_n(n,d,a,P,Q);
			Q_n(n,d,a,P,Q);
			a_n(n,d,a,P,Q);
			x = p_n(n,a,p);
			y = q_n(n,a,q);
		while(!diophantine(x,y,d)){
			P_n(n,d,a,P,Q);
			Q_n(n,d,a,P,Q);
			a_n(n,d,a,P,Q);
			x = p_n(n,a,p);
			y = q_n(n,a,q);
			n+=1;
		}
		if(max.x < x){
			max.x = x;
			maxD = d;
		}

		d+=1;
	}
	return; //{x:x,d:d};
}

console.log(main(process.argv[2]));