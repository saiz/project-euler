functi
function main() {
	'use strict';
	var i =1,
		count = 9,
		j, len,
	bool = true;
	while(bool){
		j=9;
		len = Math.ceil(Math.log(Math.pow(j,i) + 1 ) / Math.LN10);
		if(len !== i){
			bool = false;
		} else{
			while((j > 0) && len === i ){
				count+=1;
				console.log(i,j,Math.pow(j,i));
				j-=1;
			}
		}
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));