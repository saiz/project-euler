function getCycleSize(num){
	'use strict';
    var numerator = 1;
    var numerators = [];
    var numeratorDigits = [];
    var i,j, digitsInSequence,digits;

    while(!digitsInSequence){
        if(numerator === 0){
            return 0;
        }

        //Check if the numerator is previously repeated
        for(i = 0; i < numerators.length; i+=1){
            if(numerator === numerators[i]){
                digitsInSequence = 0;

                for(j = i; j < numerators.length; j+=1){
                    digitsInSequence += numeratorDigits[j];
                }

                return digitsInSequence;
            }
        }

        //Repeat not found, update the numerators and digits
        numerators[numerators.length] = numerator;
        digits = 1;
        while(num > numerator){
            numerator *= 10;
            digits+=1;
        }
        numeratorDigits[numeratorDigits.length] = digits;

        //get the next numerator
        numerator = numerator % num;
    }
}
function  getLongestUnitFractionRecurringCycle(maxNum){
	 'use strict';
    var longestNum = 1;
    var largestCycleSize = 1;
    var currentNum,cycleSize;

    for(currentNum = longestNum + 1; currentNum <= maxNum; currentNum+=1){
        cycleSize = getCycleSize(currentNum);

        if(cycleSize > largestCycleSize){
            largestCycleSize = cycleSize;
            longestNum = currentNum;
        }
    }

    return longestNum ;
}

function main(n) {
	'use strict';
	var long = getLongestUnitFractionRecurringCycle(n);
	return long;
}

console.log(main(process.argv[2]));