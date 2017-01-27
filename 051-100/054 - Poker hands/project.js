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
		score:score,
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

function next(array, end){
	if(array[1] - 1 === 1){
		array[0]+=1;
		array[1]=array[0] + 1;
	} else{
		array[1]-=1;
	}
	if( array[0] > end){
		return false;
	}
	return true;
}
function pair(hand){
	var arr = [1,2];
	while(next(arr,4)){
		console.log(arr[0],arr[1]);
	}
}
function card_sort (x, y){
	if(x.score === y.score){
		return x.suit - y.suit;
	}
	return x.score - y.score;
}
function high(hand){
	return Math.pow(10,2)*hand[4].score + hand[4].suit;
}
function scores(hand){
	pair(hand);
	return high(hand);
}
function main() {
	'use strict';
	var array =poker_array(),
		i = 0, j,
		personA,
		personB;
	while( i< array.length){
		personA = hand(array[i][0]).sort(card_sort);
		personB = hand(array[i][1]).sort(card_sort);
        console.log(scores(personA), " | ",scores(personB));
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));