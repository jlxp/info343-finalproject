import React from "react";
import Card from './Card'

export default class CardHand extends React.Component {
    render() {
        let cards = [];

        if(!this.props.whiteCardsRef) {
            return <p>loading cards...</p>
        }
        this.props.whiteCardsRef.on("value", snapshot => {snapshot.forEach(cardSnap => {
            let card = cardSnap.val();
            // Right now this is just getting the first 5 cards, mimicing the first user. I think
            // either we should make an array of card indexes that correspond with each player or figure
            // out the math that goes along with the index assignments or have a current index in the state
            // or something. Just some ideas! But just this if statement below is what we will need to change
            // I believe! So hopefully this helps get started
            if (card.index < 6) {
                cards.push(<Card key={cardSnap.key} cardSnap={cardSnap} />)
            }
            })
        });
        return (
            <div id="card-list" className="container row justify-content-center">
                {cards}
            </div>
        );
    }
}

