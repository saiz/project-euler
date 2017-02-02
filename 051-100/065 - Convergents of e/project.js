function main(n) {
	'use strict';
	n = parseInt(n,10);
	var a = [1,0,1],
		p = [a[0],(a[0]*a[1]+1)],
		q = [1,a[1]],
		i = 0;
	while(i< n){
		a[3*i+1] = 2*i;
		a[3*i+2] = 1;
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