// High Card: Highest value card.
// One Pair: Two cards of the same value.
// Two Pairs: Two different pairs.
// Three of a Kind: Three cards of the same value.
// Straight: All cards are consecutive values.
// Flush: All cards of the same suit.
// Full House: Three of a kind and a pair.
// Four of a Kind: Four cards of the same value.
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
	        return 1;
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
function main() {
	'use strict';
	var array =poker_array(),
		i = 0, j,
		personA,
		personB;
	while( i< array.length){
		personA = hand(array[i][0].sort(hand_sort));
		personB = hand(array[i][1].sort(hand_sort));
		console.log(personA);
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));