function isPrime3(n) {
    'use strict';
    if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
    if (n%2===0) {return (n===2);}
    if (n%3===0) {return (n===3);}
    var m=Math.sqrt(n), i;
    for (i=5;i<=m;i+=6) {
        if (n%i===0)     {return false;}
        if (n%(i+2)===0) {return false;}
    }
    return true;
}
function relative_prime(n){
	var total = 0,
	i=1;
	while(i < n){
		if((n/i)%1 !== 0){
			total +=1;
		}
		i+=1;
	}
	return total;
}
function main() {
	'use strict';
	var i =2,
		n = 10,
		temp;
	while(i<=n){
		temp =relative_prime(i);
		console.log(i,temp, i/temp);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));