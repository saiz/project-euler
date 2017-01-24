/*jslint white:true, for:true */
var fs = require('fs');
function generate_array(){
	'use strict';
	var arr = fs.readFileSync('./input.txt').toString().split("\r\n"), i,j, matrix=[], temp;
	for(i=0;i<arr.length;i+=1){
		temp = arr[i].match(/.{1,10}/g);
		for(j=0;j<temp.length;j+=1){
			if(matrix[j] === undefined){
				matrix[j] = parseInt(temp[j],10);
			} else{
				matrix[j]+= parseInt(temp[j],10);
			}
		}
	}
	return matrix;

}

function main(number) {
	'use strict';
	var arr = generate_array(), i,j, temp, result = [];
	for(i=0;i<arr.length;i+=1){
		temp = String(arr[i]).split("").reverse().join("").match(/.{1,10}/g);
		for(j=0;j<temp.length;j+=1){
			temp[j] = String(temp[j]).split("").reverse().join("");
		}
		result.push(temp.reverse());
	}
	var num, remainder = 0, finalString='';
	for(i=result.length-1;i>=0;i-=1){
		num = String(parseInt(result[i][1],10) + remainder);
		remainder = parseInt(result[i][0],10);
		while(num.length < 10){
			num = '0' + num;
		}
		finalString = num + finalString;
	}
	finalString = remainder + finalString;
	return finalString.substring(0, number);
}
console.log(main(process.argv[2]));