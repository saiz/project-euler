function length(num){
	return  Math.ceil(Math.log(num + 1 ) / Math.LN10);
}
function main() {
	'use strict';
	var i =1,
		count = 0,
		j, len,
	bool = true;
	while(bool){
		j=9;
		if(length(Math.pow(j,i)) !== i){
			bool = false;
		} else{
			while((j > 0) && length(Math.pow(j,i)) === i ){
				count+=1;
				//console.log(i,j,Math.pow(j,i));
				j-=1;
			}
		}
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));