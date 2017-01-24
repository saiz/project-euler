function t(n){
	return n*(n+1)/2;
}
function p(n){
	return n*(3*n-1)/2;
}
function h(n){
	return n*(2*n -1);
}

function main() {
	'use strict';
	var bool = true,
		a = 1,
		b = 1,
		c = 1;
	while(bool){
		if((t(c) === h(a)) && (p(c) === h(a))){
			console.log(a,b,c);
			a+=1;
		} else if((t(c) > h(a)) && (p(b) === h(a)) || (t(c) === h(a)) && (p(b) < h(a))){
			a+=1;
		}
		if(p(b) < h(a)){
			b+=1;
		}
		if(t(c) < h(a)){
			c+=1;
		}
		console.log(a,b,c);
	}
	return i;
}


console.log(main(process.argv[2]));