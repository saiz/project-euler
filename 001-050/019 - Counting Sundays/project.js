/*jslint white:true, for:true */
function days(n){
	'use strict';
	var year = n;
	if(n===undefined){
		year = 1900;
	}
	var calc_feb = function(){
		if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
			return 29;
		}
		return 28;
	};
	var jan_start = function(year){
		var w = (year*365 + Math.floor((year-1) / 4) - Math.floor((year-1) / 100) + Math.floor((year-1) / 400)) % 7;
		switch (w) {
			case 0: return "Sunday";
			case 1: return "Monday";
			case 2: return "Tuesday";
			case 3: return "Wednesday";
			case 4: return "Thursday";
			case 5: return "Friday";
			case 6: return "Saturday";
	        default: return "";
	    }
	};
	var startdate = function(year,day){
		var w = (year*365 + Math.floor((year-1) / 4) - Math.floor((year-1) / 100) + Math.floor((year-1) / 400)) % 7;
		switch ((w+day)%7) {
			case 0: return "Sunday";
			case 1: return "Monday";
			case 2: return "Tuesday";
			case 3: return "Wednesday";
			case 4: return "Thursday";
			case 5: return "Friday";
			case 6: return "Saturday";
	        default: return "";
	    }
	};

	var Months = [
		{
			Month:'JAN',
			daysindex:0,
			firstday:jan_start(year),
			days:31
		},
		{
			Month:'FEB',
			days: calc_feb()
		},
		{
			Month:'MAR',
			days:31
		},
		{
			Month:'APR',
			days:30
		},
		{
			Month:'MAY',
			days:31
		},
		{
			Month:'JUN',
			days:30
		},
		{
			Month:'JUL',
			days:31
		},
		{
			Month:'AUG',
			daysindex: 0,
			days:31
		},
		{
			Month:'SEP',
			days:30
		},
		{
			Month:'OCT',
			days:31
		},
		{
			Month:'NOV',
			days:30
		},
		{
			Month:'DEC',
			days:31
		}
	];
	var daysIndex = function(index){
		return Months[index-1].daysindex +  Months[index-1].days;
	};
	var i;
	for(i=1;i<Months.length;i+=1){
		Months[i].daysindex = daysIndex(i);
		Months[i].firstday=startdate(year,Months[i].daysindex);
	}
	return Months;
}

function main(start,end) {
	'use strict';
	start = parseInt(start,10);
	end = parseInt(end,10);
	var i,j, array, total =0;
	for(i = start;i <=end; i+=1){
		array = days(i);
		for(j = 0;j < array.length; j+=1){
			if(array[j].firstday === 'Sunday'){
				total +=1;
			}
		}
	}
	return total;
}

console.log(main(process.argv[2],process.argv[3]));