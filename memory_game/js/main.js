

var cards = ["queen" , "queen" , "king" , "king"];
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
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
}

flipCard(1);




