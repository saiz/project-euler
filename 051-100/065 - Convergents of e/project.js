function main(j) {
	'use strict';
	j = parseInt(j,10);
	var a = [1,0,1,1],
		p = [],
		q = [],
		i = 0, n,m;
	while(i< j){
		n = 3*i +1;
		a[n] =2*i;
		m = 3*i +2;
		a[m] =1;
		a[m+1] =1;
		if(i === 0){
			p[i] = a[0];
			q[i] = 1;
		} else if(i === 1){
			p[i] = a[i-1]*a[i]+1;
			q[i] = a[i];
		} else{
			p[i] = a[i]*p[i-1] +p[i-2];
			q[i] = a[i]*q[i-1] +q[i-2];
		}
		console.log(i)
		console.log(a);
		console.log(p);
		console.log(q);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));