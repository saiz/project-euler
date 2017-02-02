function main(j) {
	'use strict';
	j = parseInt(j,10);
	var a = [],
		p = [],
		q = [],
		i = 0;
	while(i< j){
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
	return;
}


console.log(main(process.argv[2]));