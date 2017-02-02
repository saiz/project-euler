function A(a,n) {
	if(n > a.length -4){
		console.log(n,a.length);
	}
	if(n === 0){
		return 1;
	}
	if(n === 1){
		return 1;
	}
	if(n === 2){
		return 2;
	}
	return a[n]*A(a,n-1) + A(a,n-2);
}
function main(j) {
	'use strict';
	j = parseInt(j,10) +1;
	var a = [],
		c = [],
		// p = [],
		// q = [],
		i = 0;
	while(a.length <= j +1){
		a[3*i] =1;
		a[3*i+1] =2*i;
		a[3*i+2] =1;
		if(i===0){
			c[i] =a[0];
		} else if(i===1){
c
		}
		// if(i === 0){
		// 	p[i] = a[0];
		// 	q[i] = 1;
		// } else if(i === 1){
		// 	p[i] = a[i-1]*a[i]+1;
		// 	q[i] = a[i];
		// } else{
		// 	p[i] = a[i]*p[i-1] +p[i-2];
		// 	q[i] = a[i]*q[i-1] +q[i-2];
		// }
		i+=1;
	}
	console.log(a);
	return A(a,j);
}


console.log(main(process.argv[2]));