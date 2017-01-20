/*jslint white:true, for:true */
function divsors(number) {
	'use strict';
	var i,start=[],end=[];
	for(i=1;i<=Math.sqrt(number);i+=1){
		if(number/i === i){
			start.push(i);
		} else if(number%i === 0){
		    start.push(i);
		    end.unshift(number/i);
		}
	}
	return start.concat(end);
}

function main(number) {
	'use strict';
	var i =0, triangle_Number = 0, length = 0,set;
	while (length <= number){
		i+=1;
		triangle_Number += i;
		set = divsors(triangle_Number);
		length = set.length;
	}
	return triangle_Number;
}
console.log(main(process.argv[2]));