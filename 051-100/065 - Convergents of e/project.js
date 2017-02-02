function main(m) {
	'use strict';
	m = parseInt(m,10);
	var a = [1,0,1,1],
		p = [a[0],(a[0]*a[1]+1)],
		q = [1,a[1]],
		i = 0, n;
	while(i< m){
		n = 3*i +1;
		a[n] =2*i;
		n = 3*i +2;
		a[n] =1;
		p[i] = a[i]*p[i-1] +p[i-2];
		q[i] = a[i]*q[i-1] +q[i-2];
		console.log(a);
		console.log(p);
		console.log(q);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));