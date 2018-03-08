import React from "react";
import Card from './Card';

export default class CardHand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentWillMount() {
        if(this.props.usersSnap && this.props.whiteCardsSnap) {
            this.props.usersSnap.forEach(userSnap => {
                let user = userSnap.val();
                if (user.uid === this.props.userID) {
                    let userIndex = user.index;
                    let currHand = [];
                    let obj = user.cards;
                    for(let prop in obj) {
                        currHand.push(obj[prop]);
                    }
                    let cardsArr = [];
                    this.props.whiteCardsSnap.forEach(cardSnap => {
                        let card = cardSnap.val();
                        if(currHand.includes(card.index)) {
                            cardSnap.ref.update({
                                playerIndex: userIndex
                            });
                            cardsArr.push({
                                userID: this.props.userID,
                                whiteCardsRef: this.props.whiteCardsRef,
                                cardSnap: cardSnap,
                                userIndex: userIndex
                            });
                        }
                    });
                    this.setState({cards: cardsArr});
                }
            })
        }
    }

    replaceCardAtIndex = (cardIndex, cardObj) => {
        let index;
        for(let i = 0; i < this.state.cards.length; i++) {
            let currCardIndex = this.state.cards[i].cardSnap.val().index;
            if (currCardIndex === cardIndex) {
                index = i;
            } 
        }
        let cardsArr = this.state.cards.splice(0); //Duplicate state
        cardsArr[index] = cardObj;
        this.setState({cards: cardsArr})
    }

    render() {
        if (!this.props.whiteCardsSnap) {
            return <p>loading cards...</p>
        }
        let cards = this.state.cards.map(cardObj => {
            return <Card key={cardObj.cardSnap.key} userID={cardObj.userID} usersSnap={this.props.usersSnap} whiteCardsRef={cardObj.whiteCardsRef} cardSnap={cardObj.cardSnap} userIndex={cardObj.userIndex} replaceCardAtIndex={this.replaceCardAtIndex}/>
        });

        return (
            <div id="card-list" className="container row justify-content-center">
                {cards}
            </div>
        );
    }
}

