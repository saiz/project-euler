function main() {
	'use strict';
	var i =1,
		count = 9,
		j,
	bool = true;
	while(bool){
		j=9;
		if(String(Math.pow(j,i)).length !== i){
			bool = false;
		} else{
			while((j > 0) && String(Math.pow(j,i)).length === i ){
				count+=1;
				j-=1;
			}
		}
		i+=1;
	}
	return count;
}

console.log(main(process.argv[2]));