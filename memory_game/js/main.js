

var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay =[];

var cardOne = [cards[0]];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);

var cardTwo = [cards[2]];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardsInPlay);

if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
	}
	else {
		alert("sorry, try again.");
	}

}