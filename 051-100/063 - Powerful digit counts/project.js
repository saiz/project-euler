function length(num){
	return  Math.ceil(Math.log(num + 1 ) / Math.LN10);
}
function main() {
	'use strict';
	var i =1,
		count = 9,
		j, len,
	bool = true;
	while(bool){
		j=9;
		len = length(Math.pow(j,i))
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