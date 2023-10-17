class Deck {
    static cards = [];
    static cardsNumber = 0;
    static shuffleCards(){
        for (let c = 0; c < this.cardsNumber; c++) {
            let randomCard1 = Math.floor(Math.random() * this.cardsNumber); 
            let randomCard2 = Math.floor(Math.random() * this.cardsNumber);
            let salvedCard = this.cards[randomCard1];
            this.cards[randomCard1] = this.cards[randomCard2];
            this.cards[randomCard2] = salvedCard;
            console.log(this.cards[randomCard1]);
            console.log(this.cards[randomCard2]);
        }
    }
    static addToCards(card){
        for(let c = 1; c <=2; c++){
            this.cards.push(card);
            this.cardsNumber +=1;
        }
    }
}
export default Deck;