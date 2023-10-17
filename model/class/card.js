import Deck from "./deck.js";
class Card{
    backImage = '';
    constructor(frontImage){
        this.frontImage = frontImage;
    }
    setBackImage(imgPattern){
        this.backImage = imgPattern;
    }
}
var c1 = new Card('frontimagetest');
c1.setBackImage('backimagetest');
Deck.addToCards(c1);
console.log(Deck.cards);