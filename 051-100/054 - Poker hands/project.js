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
// spades, hearts, diamonds, clubs

var fs = require('fs');
function card(str) {
	var i = str[0],
		j = str[1],
		score = -1 , suit = -1 ;
	switch(i) {
		case "T":
			score = 10;
			break;
		case "J":
			score = 11;
			break;
		case "Q":
			score = 12;
			break;
		case "K":
			score = 13;
			break;
		case "A":
			score = 14;
			break;
		default:
			score = parseInt(i,10);
	}
	switch(j) {
		case "S":
			suit = 0;
			break;
		case "H":
			suit = 1;
			break;
		case "D":
			suit = 2;
			break;
		case "C":
			suit = 3;
			break;
		default:
			suit = -1;
	}
	return {
		score:score -2,
		suit:suit
	};
}

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

function main() {
	'use strict';
	var array =poker_array(),
		i = 0,
		first;
	while( i< array.length){

		console.log(array[i][0][0]);
		i+=1;
	}
	return i;
}

console.log(main(process.argv[2]));