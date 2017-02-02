function main(n) {
	'use strict';
	n = parseInt(n,10);
	var a = [1,0],
		p = [],
		q = [1],
		i = 0;
		p.push(a[0]);
		p.push(a[0]*a[1]+1);
		q.push(a[1]);
	while(i< n){
		if(i >=4 && n%2===1){
			a[i] = 2*i;
		} else if(i >=4 && n%2===0){
			a[i] = 1;
		}
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