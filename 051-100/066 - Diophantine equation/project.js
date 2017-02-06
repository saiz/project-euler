var BigNumber = require('bignumber.js');
function a_n(n,d,a,P,Q){
	if(a[n] !== undefined){
		return a[n];
	}
	if(n === 0){
		//a[n] = Math.floor(Math.sqrt(d));
		a[n] = new BigNumber(d.sqrt().floor());
		return a[n];
	}
	//a[n] = Math.floor((a[0]+P[n])/Q[n]);
	a[n] = new BigNumber(a[0].plus(P[n]).dividedBy(Q[n]).floor());
	return a[n];
}
function p_n(n,a,p){
	if(p[n] !== undefined){
		return p[n];
	}
	if(n === 0 ){
		p[n] = new BigNumber(a[0]);
		return p[n];
	}
	if(n === 1){
		//p[n] = a[0]*a[1] +1;
		p[n] = new BigNumber(a[0].times(a[1]).plus(1));
		return p[n];
	}
	//p[n] = a[n]*p[n-1] +p[n-2];
	p[n] = new BigNumber(a[n].times(p[n-1]).plus(p[n-2]));
	return p[n];
}
function q_n(n,a,q){
	if(q[n] !== undefined){
		return q[n];
	}
	if(n === 0){
		//q[n] = 1;
		q[n] = new BigNumber(1);
		return q[n];
	}
	if(n === 1){
		q[n] = new BigNumber(a[1]);
		return q[n];
	}
	//q[n] = a[n]*q[n-1] +q[n-2];
	q[n] = new BigNumber(a[n].times(q[n-1]).plus(q[n-2]));
	return q[n];
}
function Q_n(n,d,a,P,Q){
	var temp, temp2;
	if(Q[n] !== undefined){
		return Q[n];
	}
	if(n === 0){
		//Q[n] = 1;
		Q[n]= new BigNumber(1);
		return Q[n];
	}
	if(n === 1){
		//Q[n] = d - Math.pow(a[0],2);
		temp = new BigNumber(a[0].pow(2));
		Q[n] = new BigNumber(d.minus(temp));
		return Q[n];
	}
	//Q[n] = (d - Math.pow(P[n],2))/Q[n-1];

	Q[n] = new BigNumber(d.minus(P[n].pow(2)).dividedBy(Q[n-1]);
	return Q[n];
}
function P_n(n,d,a,P,Q){
	if(P[n] !== undefined){
		return P[n];
	}
	if(n === 0){
		//P[n] = 0;
		P[n] =  new BigNumber(0);
		return P[n];
	}
	if(n === 1){
		P[n] = a[0];
		return P[n];
	}
	//P[n] = a[n-1]*Q[n-1] - P[n-1];
	P[n] = a[n-1];
	return P[n].times(Q[n-1]).minus(P[n-1]);
}
function diophantine (x,y,d){
	var a,b;
	a = x;
	a.pow(2);
	b = d;
	b.times(y).times(y);
	//if(x*x - d*y*y === 1){
	if(new BigNumber(1).comparedTo(a.minus(b)) == 1){
		return true;
	}
	return false;
}
function main(m) {
	'use strict';
	m =parseInt(m,10);
	var a, p, q, P, Q,
		x, y, n,
		d = 2, _d,
		max = {
			x:0,
			d:0
		};
	while(d <= m){
		if(Math.sqrt(d)%1!==0){
				n = 0;
				a = [];
				p = [];
				q = [];
				P = [];
				Q = [];
				_d = new BigNumber(d);
				P_n(n,_d,a,P,Q);
				Q_n(n,_d,a,P,Q);
				a_n(n,_d,a,P,Q);
				x = p_n(n,a,p);
				y = q_n(n,a,q);
			while(!diophantine(x,y,_d)){
				//console.log('n:',n);
				P_n(n,_d,a,P,Q);
				Q_n(n,_d,a,P,Q);
				a_n(n,_d,a,P,Q);
				x = p_n(n,a,p);
				y = q_n(n,a,q);
				n+=1;
			}
			console.log(q);
			//console.log(x.toString(),y.toString());
			// if(max.x < x){
			// 	max.x = x;
			// 	max.d = d;
			// 	console.log(max);
			// }
		}
		d+=1;
	}
	return;
}

console.log(main(process.argv[2]));