function a_n(n,d,a){
	if(a[n] !== undefined){
		return a[n];
	}
	if(n === 0){
		a[n] = Math.floor(Math.sqrt(d));
		return a[n];
	}
	a[n] = 2*a_n(0);
	return a[n];
}
function p_n(n,d,a,p){
	if(p[n] !== undefined){
		return p[n];
	}
	if(n === 0 ){
		p[n] = a_n(n,d,a);
		return p[n];
	}
	if(n === 1){
		p[n] = a_n(n-1,d,a)*a_n(n,d,a) +1;
		return p[n];
	}
	p[n] = a_n(n,d,a)*p_n(n-1,d,a,p) +p_n(n-2,d,a,p);
	return p[n];
}
function q_n(n,d,a,q){
	if(q[n] !== undefined){
		return q[n];
	}
	if(n === 0){
		q[n] = 1;
		return q[n];
	}
	if(n === 1){
		q[n] = a_n(n,d,a);
		return q[n];
	}
	q[n] = a_n(n,d,a)*q_n(n-1,d,a,q) +q_n(n-2,d,a,q);
	return q[n];
}

function main(n) {
	'use strict';
	n =parseInt(n,10);
	var d =1,
		i,
		res,
		max = {x:0,d:0,y:0};
	while(d <=n){
		if( Math.sqrt(d)%1!==0){
			console.log(res);
		}
		d+=1;
	}
	console.log('--');
	return max; //{x:x,d:d};
}

console.log(main(process.argv[2]));