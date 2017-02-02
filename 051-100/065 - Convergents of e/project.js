function A(a,n) {
	if(n <1){
		return 1;
	}
	return a[n]* A(a,n-1) + 1*A(a,n-2);
}
function main(j) {
	'use strict';
	j = parseInt(j,10);
	var a = [],
		p = [],
		q = [],
		i = 0;
	while(i<= j){
		a[3*i] =1;
		a[3*i+1] =2*i;
		a[3*i+2] =1;
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
		i+=1;
	}
	return A(a,j);
}


console.log(main(process.argv[2]));