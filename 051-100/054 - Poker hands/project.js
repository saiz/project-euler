// Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.

var fs = require('fs');
function poker_array(){
	'use strict';
	var arr = fs.readFileSync('./poker.txt').toString().split("\r\n"),
	i ,j =[], k =[];
	for(i=0;i<arr.length;i+=1){
		arr[i] = arr[i].split(" ");
		j = arr[i].slice(0,5);
		k = arr[i].slice(5,10);
		arr[i] = [];
		arr[i][0] = j;
		arr[i][1] = k;
	}
	return arr;
}
function card_value(x) {
	switch(x) {
	    case "T":
	        return 10;
	    case "J":
	        return 11;
	    case "Q":
	        return 12;
		case "K":
	        return 13;
		case "A":
	        return 14;
	}
	return parseInt(x,10);
}
function suit_value(x) {
	switch(x) {
	    case "S":
	        return 0;
	    case "H":
	        return 1;
	    case "D":
	        return 2;
		case "C":
	        return 3;
	}
	return parseInt(x,10);
}
function hand_sort(x,y){
	if(x[0] === y[0]){
		return suit_value(x[1]) < suit_value(y[1]);
	}
	return card_value(x[0]) < card_value(y[0]);
}
function hand(array){
	var value ='',suit = '', i = 0;
	while(i<array.length){
		value += array[i][0];
		suit += array[i][1];
		i+=1;
	}
	return [value,suit];
}
function high_card(hand) {
	return card_value(hand[0][0]);
}
function high_card2(hand) {
	return card_value(hand[0][1]);
}
function four(hand) {
	if((hand[0].split(hand[0][0]).length - 1) === 4){
		return true;
	}
	if((hand[0].split(hand[0][4]).length - 1) === 4){
		return true;
	}
	return false;
}
function three_pair(hand) {
	var count =0,
		i=0,
		str = hand[0],
		char;
	while(str.length > 0){
		if((str.split(str[0]).length - 1 == 3)){
			count +=1;
		}
		str = str.replace(new RegExp(str[0],"g"),"");
	}
	return count === 1;
}
function two_pair(hand) {
	var count =0,
		i=0,
		str = hand[0],
		char;
	while(str.length > 0){
		if((str.split(str[0]).length - 1 == 2)){
			count +=1;
		}
		str = str.replace(new RegExp(str[0],"g"),"");
	}
	return count === 2;
}
function pair(hand) {
	var count =0,
		i=0,
		str = hand[0],
		char;
	while(str.length > 0){
		if((str.split(str[0]).length - 1 == 2)){
			count +=1;
		}
		str = str.replace(new RegExp(str[0],"g"),"");
	}
	return count === 1;
}
function pair_value(hand){
	var value =0,
		i=0,
		str = hand[0],
		char;
	while(i <str.length){
		if((str.split(str[i]).length - 1 === 2)){
			value = card_value(hand[0][i]);
			i = str.length;
		}
		i+=1;
	}
	return value;
}
function remove_pair (hand, value){
	var str = hand[0];
	str = str.replace(new RegExp(value,"g"),"");
	return str;
}
function pair_tie(personA,personB){
	var a =remove_pair(personA,pair_value(personA)),
		b= remove_pair(personB,pair_value(personB)),
		i;
	while(i<4){	if
	}
	}
}
function flush(hand) {
	var str = hand[1];
	if((str.split(str[0]).length - 1 === 5)){
		return true;
	}
	return false;
}
function fullhouse(hand) {
	if((hand[0].split(hand[0][0]).length - 1) === 3 && (hand[0].split(hand[0][4]).length - 1) === 2){
		return true;
	}
	if((hand[0].split(hand[0][0]).length - 1) === 2 && (hand[0].split(hand[0][4]).length - 1) === 3){
		return true;
	}
	return false;
}
function straight(hand) {
	var start  = card_value(hand[0][0]),
		bool = true,
		i=1;
		//console.log(card_value(hand[0][0]), hand[0], i);
	if( card_value(hand[0][0]) === 14 && card_value(hand[0][1]) === 5 && card_value(hand[0][2]) === 4 && card_value(hand[0][3]) === 3 && card_value(hand[0][4]) === 2  ){
		return true;
	}
	while(i<hand[0].length && bool){
		//console.log(card_value(hand[0][i]), hand[0], i);
		if(card_value(hand[0][i]) !== start - i){
			bool = false;
		}
		i+=1;
	}
	return bool;
}
function straight_flush(hand){
	if(straight(hand) && flush(hand)){
		return true;
	}
	return false;
}
function royal_flush(hand) {
	if(straight_flush(hand) && card_value(hand[4]) === 10){
		return true;
	}
	return false;
}
function high_hand(hand){
	if(royal_flush(hand)){
		return 10;
	}
	if(straight_flush(hand)){
		return 9;
	}
	if(four(hand)){
		return 8;
	}
	if(fullhouse(hand)){
		return 7;
	}
	if(flush(hand)){
		return 6;
	}
	if(straight(hand)){
		return 5;
	}
	if(three_pair(hand)){
		return 4;
	}
	if(two_pair(hand)){
		return 3;
	}
	if(pair(hand)){
		return 2;
	}
	return -1;
}
function main() {
	'use strict';
	var array =poker_array(),
		i = 0, j,
		personA,
		personB,
		a = 0,
		tie = 0,
		b = 0;
	while( i< array.length){
		personA = hand(array[i][0].sort(hand_sort));
		personB = hand(array[i][1].sort(hand_sort));
		if(high_hand(personA) > high_hand(personB)){
			a+=1;
		} else if(high_hand(personA) < high_hand(personB)){
			b+=1;
		} else if(high_hand(personA) === 5){
			if(high_card2(personA) > high_card2(personB)){
				a+=1;
			} else if(high_card2(personA) < high_card2(personB)){
				b+=1;
			} else {
				tie +=1;
				console.log(personA,personB);
				console.log('tie - need to make better poker rules - a');
			}
		} else if(high_hand(personA) === 2){
			if(pair_value(personA) > pair_value(personB)){
				a+=1;
			} else if(pair_value(personA) < pair_value(personB)){
				b+=1;
			} else{
				tie +=1;
				console.log(personA,personB);
				console.log('tie - need to make better poker rules - b');
			}
		} else if(high_hand(personA) === -1){
			if(high_card(personA) > high_card(personB)){
				a+=1;
			} else if(high_card(personA) < high_card(personB)){
				b+=1;
			} else{

				console.log('tie - need to make better poker rules - c');
			}
		} else {
			tie +=1;
			console.log('tie - need to make better poker rules - z');
		}
		i+=1;
	}
	return [a,b,tie];
}

console.log(main(process.argv[2]));