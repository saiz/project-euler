// Straight: All cards are consecutive values.
// Straight Flush: All cards are consecutive values of same suit.
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
	return 10*card_value(hand[0][0])+ suit_value(hand[1][0]);
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
function flush(hand) {
	var str = hand[1];
	if((str.split(str[0]).length - 1 === 5)){
		return true;
	}
	return false;
}
function straight(hand) {
	var start  = card_value(hand[0][0]),
		bool = true,
		i=1;
		console.log(card_value(hand[0][i]), hand[i], i);
	while(i<hand[0].length && bool){
		console.log(card_value(hand[0][i]), hand[i], i);
		if(card_value(hand[0][i]) !== start - i){
			bool = false;
		}
		i-=1;
	}
	return bool;
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
function main() {
	'use strict';
	var array =poker_array(),
		i = 0, j,
		personA,
		personB;
	while( i< array.length){
		personA = hand(array[i][0].sort(hand_sort));
		personB = hand(array[i][1].sort(hand_sort));
		console.log(straight(personA));
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));