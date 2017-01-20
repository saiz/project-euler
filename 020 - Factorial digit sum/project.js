/*jslint white:true, for:true */
function num_to_array(n) {
	'use strict';
	var j,temp=[];
	temp = String(n).split('');
	for(j=0;j<temp.length;j+=1){
		temp[j]=parseInt(temp[j],10);
	}
	return temp;
}
function reverse(s) {
	'use strict';
	var o = [],i,len = s.length;
	for (i = 0; i <= len; i+=1){
		o.push(s.charAt(len - i));
	}
	return o.join('');
}
function fact(n){
	'use strict';
	n = parseInt(n,10);
	if(n<=2){
		return [n];
	}
	var i,j,k,result,temp,rem,mod,
	total=num_to_array(n).reverse();
	for(i=n-1;i>=2;i-=1){
		//i= 9->2
		temp = total.slice();
		total = [];
		for(j=0;j<temp.length;j+=1){
			result = temp[j]*i;
			result = ''+result;
			result = reverse(result).split('');
			for(k=0;k<result.length;k+=1){
				result[k]=parseInt(result[k],10);
				if(total[j+k]!==undefined){
					total[j+k]+=result[k];
				} else {
					total[j+k]=result[k];
				}

			}
		}
		if(total[total.length-1]===0){
			total.splice(-1);
		}

		for(j=0;j<total.length;j+=1){
			if(total[j]>9){
				rem = total[j]%10;
				mod = (total[j] -rem )/10;
				total[j] = rem;
				if(total[j+1]!==undefined){
					total[j+1]+=mod;
				} else {
					total[j+1]=mod;
				}
			}
		}
	}
	return total.reverse().join('');
}
function main(n){
	'use strict';
	var num = fact(n),i,total=0;
	for(i=0;i<num.length;i+=1){
		total +=parseInt(num[i],10);
	}
	return total;
}

console.log(main(process.argv[2]));