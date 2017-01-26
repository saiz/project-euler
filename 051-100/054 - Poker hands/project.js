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
		j = str[1];
	switch(i) {
	    case "Banana":
	        text = "Banana is good!";
	        break;
	    case "Orange":
	        text = "I am not a fan of orange.";
	        break;
	    case "Apple":
	        text = "How you like them apples?";
	        break;
	    default:
	        text = "I have never heard of that fruit...";
}

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
	var i =poker_array();
	return i;
}

console.log(main(process.argv[2]));