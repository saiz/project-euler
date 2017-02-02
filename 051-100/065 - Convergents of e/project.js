function main(n) {
	'use strict';
	var a = [2,1],
		p = [a[0],(a[0]*a[1]+1)],
		q = [1,a[1]],
		i = 0;
	while(bool){
		if(i >=4 && n%2===1){
			a[i] = 2*i;
		} else if(i >=4 && n%2===0){
			a[i] = 1;
		}
		p[i] = a[i]*p[i-1] +p[i-2];
		q[i] = a[i]*q[i-1] +q[i-2];
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));