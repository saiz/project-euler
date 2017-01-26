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
function hand(array){
	var res = [], i = 0;
	while(i<array.length){
		res.push(card(array[i]));
		i+=1;
	}
	return res;
}
function royal_flush(hand){
	var i =0,
	flush = true,
	suit = hand[0].suit;
	score = 9;
	while(i<hand.length && flush){
		if(hand[i].suit !== suit){
			flush = false;
		}
		if(score + i !== hand[i].score){
			flush = false;
		}
		i+=1;
	}
	if(!flush){
		return -1;
	}
	return Math.pow(10,10)*+suit;
}
function card_sort (x, y){
	return x.score - y.score;
}
function main() {
	'use strict';
	var array =poker_array(),
		i = 0, j,
		personA,
		personB;
	while( i< array.length){
		personA = hand(array[i][0]).sort(card_sort(x,y));
		personB = hand(array[i][1]).sort(card_sort(x,y));
        console.log(personA);
		i+=1;
	}
	return i;
}

console.log(main(process.argv[2]));