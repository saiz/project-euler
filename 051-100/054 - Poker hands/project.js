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

function hand(array){
	var res = [], i = 0;
	while(i<array.length){
		res.push(card(array[i]));
		i+=1;
	}
	return res;
}
function main() {
	'use strict';
	var array =poker_array(),
		i = 0, j,
		personA,
		personB;
	while( i< array.length){
		personA = hand(array[i][0]);
		personB = hand(array[i][1]);
		console
		i+=1;
	}
	return;
}

console.log(main(process.argv[2]));