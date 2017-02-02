function fraction(n, total){
	if(n =<0){
		return [2,1];
	}


}
function main(n) {
	'use strict';
	n = parseInt(n,10);
	var i =1,
		total =[1,1],
		e_n = [];
	while(i<n){
		total = add(total,fraction(i));
		console.log(total);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));