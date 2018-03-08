/**
 * Controls a card hand for user managing all of their current cards
 */

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
        if(this.props.usersSnap && this.props.whiteCardsSnap) { // if props exist
            this.props.usersSnap.forEach(userSnap => {
                let user = userSnap.val();
                if (user.uid === this.props.userID) {
                    let userIndex = user.index;
                    let currHand = [];
                    let obj = user.cards;
                    // adds all indexes of players current cards to an array
                    for(let prop in obj) {
                        currHand.push(obj[prop]);
                    }
                    let cardsArr = [];
                    this.props.whiteCardsSnap.forEach(cardSnap => {
                        let card = cardSnap.val();
                        // if card index corresponds with an index currently in the users hand
                        if(currHand.includes(card.index)) {
                            // sets player index on card to reflect it belongs to current user's index
                            cardSnap.ref.update({
                                playerIndex: userIndex
                            });
                            // creates a card object for each card currently in user's hand
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

    // replaces a card object when a user 'draws' a new card
    replaceCardAtIndex = (cardIndex, cardObj) => {
        let index;
        for(let i = 0; i < this.state.cards.length; i++) {
            let currCardIndex = this.state.cards[i].cardSnap.val().index;
            if (currCardIndex === cardIndex) {
                index = i;
            } 
        }
        let cardsArr = this.state.cards.splice(0); // duplicates state
        cardsArr[index] = cardObj; // replaces card that was just played
        this.setState({cards: cardsArr})
    }

    render() {
        if (!this.props.whiteCardsSnap) {
            return <p>loading cards...</p>
        }
        // creates card component for each card currently in user's hand
        let cards = this.state.cards.map(cardObj => {
            return <Card key={cardObj.cardSnap.key} userID={cardObj.userID} usersSnap={this.props.usersSnap} whiteCardsRef={cardObj.whiteCardsRef} cardSnap={cardObj.cardSnap} userIndex={cardObj.userIndex} replaceCardAtIndex={this.replaceCardAtIndex} currResponsesRef={this.props.currResponsesRef}/>
        });

        return (
            <div id="card-list" className="container row justify-content-center">
                {cards}
            </div>
        );
    }
}

