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
	var arr = fs.readFileSync('./poker.txt').toString().split(" "),
	i;
	for(i=0;i<arr.length;i+=1){
	    arr[i] = arr[i].replace(/\r\n/g,  ').toLowerCase();
	}
	return arr;
}
function main() {
	'use strict';
	var i =poker_array();
	return i;
}

console.log(main(process.argv[2]));