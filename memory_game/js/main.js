

var cards = [
{ 
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay =[];
function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
	}
	else {
		alert("sorry, try again.");
	}	
}
function flipCard(cardId) {

 	if(cardsInPlay.length === 2){
	

}
	console.log("User flipped " + cards[cardId].rank);
	checkForMatch();

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

flipCard(1);




